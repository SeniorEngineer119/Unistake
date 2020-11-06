export const types = {
  SHOW_SPINNER: 'LAYOUT_SHOW_SPINNER',
  HIDE_SPINNER: 'HIDE_SPINNER',
  SET_SETTINGS: 'SET_SETTINGS',
};

export const setSetting = (key, value) => ({
  type: types.SET_SETTINGS,
  payload: { key, value },
});

export const showSpinner = (id = 'app') => ({
  type: types.SHOW_SPINNER,
  payload: id,
});

export const hideSpinner = (id = 'app') => ({
  type: types.HIDE_SPINNER,
  payload: id,
});
