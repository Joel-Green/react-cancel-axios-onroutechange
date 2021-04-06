import axios, {AxiosInstance, AxiosResponse } from 'axios';
import URL from './url' ;


let CANCEL_TOKEN_SOURCE = axios.CancelToken.source();



function generateNewCancelTokenSource() {
  CANCEL_TOKEN_SOURCE = axios.CancelToken.source();
}

export const axiosInstance = axios.create({
  baseURL: URL,
});


const API = {
  get(endpoint){
    return axiosInstance.get(endpoint, {
      cancelToken: CANCEL_TOKEN_SOURCE.token,
    });
  },

  // ...Another Functions

  finishPendingRequests(cancellationReason) {
    CANCEL_TOKEN_SOURCE.cancel(cancellationReason);
    console.log('CANCELLED')
    generateNewCancelTokenSource();
  },



};

export default API
