import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import DeviceInfo from 'react-native-device-info';
import {Store} from 'redux';
import {AppState} from '../rootReducer';

const axiosAuthorizationHandler = (store: Store) => {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const state = store.getState() as AppState;

      if (state.auth.token) {
        config.headers.Authorization = `Bearer ${state.auth.token}`;
      }

      const deviceId = DeviceInfo.getUniqueId();

      if (deviceId) {
        config.headers['x-deviceid'] = deviceId;
      }

      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
};

export default axiosAuthorizationHandler;
