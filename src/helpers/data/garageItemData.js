import axios from 'axios';
import apiKeys from './apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getGarageItemsByCategoryId = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/garageItems.json?orderBy="categoryId"&equalTo="${categoryId}"`)
    .then(({ data }) => resolve(utils.firebaseArray(data)))
    .catch((err) => reject(err));
});

const getGarageItemByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/garageItems.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.firebaseArray(data)))
    .catch((err) => reject(err));
});

const createItem = (newItem) => axios.post(`${baseUrl}/garageItems.json`, newItem);

const deleteItem = (ItemId) => axios.delete(`${baseUrl}/garageItems/${ItemId}.json`);

const updateItem = (itemId, editedItem) => axios.patch(`${baseUrl}/garageItems/${itemId}.json`, editedItem);

export default {
  getGarageItemsByCategoryId,
  getGarageItemByUid,
  createItem,
  updateItem,
  deleteItem,
};
