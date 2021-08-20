import {Dispatch} from 'redux';
import {
  FlowerApi,
  FlowerApiApiV1FlowersGetRequest,
  FlowerApiApiV1FlowersSearchGetRequest,
} from '../api';
import config from '../config';

const flowerApi = new FlowerApi({
  basePath: config.API_BASE_URL,
  baseOptions: {timeout: 30000},
});

const getFlowers = (data: FlowerApiApiV1FlowersGetRequest) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await flowerApi.apiV1FlowersGet(data);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error.response?.data);
    }
  };
};

const getFlowersSearch = (query: FlowerApiApiV1FlowersSearchGetRequest) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await flowerApi.apiV1FlowersSearchGet(query);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error.response?.data);
    }
  };
};

const getFlowerById = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await flowerApi.apiV1FlowersIdGet({id});

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error.response?.data);
    }
  };
};

export default {
  getFlowers,
  getFlowersSearch,
  getFlowerById,
};
