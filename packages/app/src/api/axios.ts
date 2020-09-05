/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from './constants';

const instance = axios.create({
  baseURL: API_URL
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export type AxiosResponse<T = any> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
};

export default instance;
