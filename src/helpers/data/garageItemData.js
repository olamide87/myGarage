import axios from 'axios';
import apiKeys from './apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getGarageItemsByCategoryId = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/garageItems.json?orderBy="uid"&equalTo="${categoryId}"`)
    .then(({ data }) => resolve(utils.firebaseArray(data)))
    .catch((err) => reject(err));
});

export default {
  getGarageItemsByCategoryId,
};
