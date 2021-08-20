import {Dispatch} from 'redux';
import {SightingApi, SightingApiApiV1SightingsGetRequest} from '../api';
import config from '../config';

const sightingApi = new SightingApi({
  basePath: config.API_BASE_URL,
  baseOptions: {timeout: 30000},
});

const getSightings = (data: SightingApiApiV1SightingsGetRequest) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await sightingApi.apiV1SightingsGet(data);

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error.response?.data);
    }
  };
};

export default {
  getSightings,
};
