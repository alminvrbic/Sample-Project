import axios, {AxiosError} from 'axios';
import {Store} from 'redux';
import authActions from '../../services/authService';
import * as navigationService from '../../services/navigationService';
import {AppState} from '../rootReducer';

let isRefreshing = false;
let refreshTokenPromise: Promise<any> | null = null;

const axiosRefreshTokenHandler = (store: Store) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        if (isRefreshing && refreshTokenPromise) {
          return refreshTokenPromise
            .then(() => {
              return axios.request(error.config);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        const state = store.getState() as AppState;

        if (state.auth.refreshToken) {
          isRefreshing = true;

          refreshTokenPromise = store.dispatch<any>(
            authActions.refreshToken({
              refreshTokenRequestDto: {refreshToken: state.auth.refreshToken},
            }),
          );

          try {
            await refreshTokenPromise;
            const newState = store.getState() as AppState;
            refreshTokenPromise = null;
            isRefreshing = false;

            if (newState.auth.token) {
              return axios.request(error.config);
            }
          } catch (e) {
            navigationService.navigate('Auth');
            return Promise.reject(error);
          }
        }
      }

      return Promise.reject(error);
    },
  );
};

export default axiosRefreshTokenHandler;
