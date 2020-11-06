const APP_ID = 'STUDENT_COIN_WEB_';

export const setItem = (key, data) => {
  localStorage.setItem(APP_ID + key, JSON.stringify(data));
};

export const getItem = (key, defaultVal) => {
  try {
    return JSON.parse(localStorage.getItem(APP_ID + key)) || defaultVal;
  } catch (e) {
    return defaultVal || false;
  }
};

export const deleteItem = (key) => {
  localStorage.removeItem(APP_ID + key);
};

export const getToken = () => getItem('TOKEN', false);
export const setToken = (data) => setItem('TOKEN', data);
export const deleteToken = () => deleteItem('TOKEN');

export const clearInfo = () => {
  deleteToken();
};
