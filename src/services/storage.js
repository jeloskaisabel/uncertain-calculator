export const storageSave = (param, value) => {
  localStorage.setItem(param, JSON.stringify(value));
};

export const storageGet = (param) => {
  return JSON.parse(localStorage.getItem(param));
};

export const storageDelete = (param) => {
  localStorage.removeItem(param);
};

export default {
  storageSave,
  storageGet,
  storageDelete,
};
