import {ThunkDispatch} from '@reduxjs/toolkit';
import {
  UserApi,
  UserApiApiV1UsersLoginPostRequest,
  UserApiApiV1UsersRegisterPostRequest,
} from '../api/api';
import config from '../config';
import * as authSlices from '../redux/modules/authReducer';
import toastyService from './toastyService';

const authApi = new UserApi({
  basePath: config.API_BASE_URL,
  baseOptions: {timeout: 30000},
});

const login = (data: UserApiApiV1UsersLoginPostRequest) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const response = await authApi.apiV1UsersLoginPost(data);

      dispatch(authSlices.authSuccess(response.data));
      toastyService.open({
        message: 'Login Success',
        type: 'success',
      });

      return Promise.resolve(response);
    } catch (err) {
      dispatch(authSlices.authFailure());
      toastyService.open({
        message: err.response?.data.error,
        type: 'error',
      });

      return Promise.reject(err.response?.data);
    }
  };
};

const register = (data: UserApiApiV1UsersRegisterPostRequest) => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      const response = await authApi.apiV1UsersRegisterPost(data);

      dispatch(authSlices.authSuccess(response.data));
      toastyService.open({
        message: 'Registration Success',
        type: 'success',
      });

      return Promise.resolve(response);
    } catch (err) {
      dispatch(authSlices.authFailure());
      toastyService.open({
        message: err.response?.data.error,
        type: 'error',
      });
      return Promise.reject(err.response?.data);
    }
  };
};

const refreshToken = (refreshToken: any) => async (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  try {
    const response = await authApi.apiV1UsersMeRefreshGet(refreshToken);

    dispatch(authSlices.authSuccess(response.data));
    return Promise.resolve(response);
  } catch (err) {
    dispatch(authSlices.authFailure());
    return Promise.reject(err);
  }
};

const logout = () => {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
      dispatch(authSlices.logout());
    } catch (error) {
      dispatch(authSlices.logout());
      return Promise.reject(error);
    }
  };
};

export default {
  login,
  refreshToken,
  register,
  logout,
};
