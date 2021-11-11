import axios from "axios";
import * as actions from '../modules/api';

const apiMiddleware = ({dispatch, getState}) => next => async action => {
  if (action.type !== actions.request) return next(action);

  try {
    const response = await axios.request({
      baseURL: 'http://20.67.104.18/api/',

      url: action.payload.url,
      method: action.payload.method,
      data: action.payload.data
    });

    dispatch({
      type: action.payload.onSuccess,
      payload: {
        status: response.status,
        data: response.data
      }
    });
  } catch (error) {
    let payload;
    if (error.response) {
      payload = {
        status: error.response.status,
        data: error.response.data
      };
    }

    dispatch({
      type: action.payload.onFailure,
      payload
    });
  }
}

export default apiMiddleware;
