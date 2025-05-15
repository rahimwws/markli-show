import axios from 'axios';

import { getToken } from '../token';

export const client = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * axios instance without token
 */

export const clientWithoutToken = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * axios instance with token
 */

client.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * axios instance response interceptor for error handling
 */

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error)) {
      // You can add more specific error handling logic here
    } else {
    }
    return Promise.reject(error);
  }
);

export default client;
