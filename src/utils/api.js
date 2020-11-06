import { Promise } from 'es6-promise';
import * as axios from 'axios';
import qs from 'qs';

import { getToken, clearInfo } from './storage';

export const SITE_URL = '/';
export const API_URL = process.env.REACT_APP_API_URL;

const requestConfigJSON = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const transformToFormData = (values) => {
  const formData = new FormData();

  for (const key in values) {
    if (values[key] instanceof File) {
      formData.append(key, values[key]);
    } else {
      formData.set(key, values[key]);
    }
  }

  return formData;
};

const transformBody = (body, config) => {
  if (config.headers['Content-Type'] === 'application/json')
    body = JSON.stringify(body);
  if (config.headers['Content-Type'] === 'multipart/form-data')
    body = transformToFormData(body);
  return body;
};

const setAuthHeaders = (hdr = {}) => {
  const headers = hdr;
  const token = getToken();
  if (token) {
    headers.Authorization = token;
  }
  return headers;
};

const transformURL = (endpoint) => `${API_URL}${endpoint}`;

const withPromise = (axiosInstance) =>
  new Promise((resolve, reject) => {
    axiosInstance.then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        // service is unavailable
        if (!err.response) {
          reject(new Error({ status: 503, error: 'Service is unavailable' }));
          return;
        }

        if (err.response.status === 403) {
          // redirect to the homepage if permission is denied
          document.location = '/';
        } else if (
          // redirect to login page if user is not authenticated
          err.response.status === 401 &&
          window.location.pathname.indexOf('/login') === -1
        ) {
          // clear user from storage
          clearInfo();
          // redirect
          document.location = '/login';
        }

        // general error
        reject(
          Object.assign(err.response.data || {}, {
            status: err.response.status,
          })
        );
      }
    );
  });

export function create(config = requestConfigJSON) {
  return withPromise(
    axios({
      ...config,
      url: transformURL(config.url),
    })
  );
}

export function get(endpoint, query, config = requestConfigJSON) {
  setAuthHeaders(config.headers);
  let url = transformURL(endpoint);
  if (query) {
    url += `?${qs.stringify(query)}`;
  }
  return withPromise(axios.get(url, config));
}

export function post(endpoint, body, config = requestConfigJSON) {
  setAuthHeaders(config.headers);
  return withPromise(
    axios.post(transformURL(endpoint), transformBody(body, config), config)
  );
}

export function patch(endpoint, body, config = requestConfigJSON) {
  setAuthHeaders(config.headers);
  return withPromise(
    axios.patch(transformURL(endpoint), transformBody(body, config), config)
  );
}

export function put(endpoint, body, config = requestConfigJSON) {
  setAuthHeaders(config.headers);
  return withPromise(
    axios.put(transformURL(endpoint), transformBody(body, config), config)
  );
}

export function del(endpoint, config = requestConfigJSON) {
  setAuthHeaders(config.headers);
  return withPromise(axios.delete(transformURL(endpoint), config));
}
