import axios from 'axios';
import apiKeys from './apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getGarageCategoryByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/garageCategories.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.firebaseArray(data)))
    .catch((err) => reject(err));
});

const getGarageCategoryByCategoryId = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/garageCategories.json?orderBy="uid"&equalTo="${categoryId}"`)
    .then(({ data }) => resolve(utils.firebaseArray(data)))
    .catch((err) => reject(err));
});

const getSingleCategory = (categoryId) => axios.get(`${baseUrl}/garageCategories/${categoryId}.json`);

const createCategory = (newCategory) => axios.post(`${baseUrl}/garageCategories.json`, newCategory);

const updateCategory = (categoryId, editedCategory) => axios.put(`${baseUrl}/garageCategories/${categoryId}.json`, editedCategory);

const deleteCategory = (categoryId) => axios.delete(`${baseUrl}/garageCategories/${categoryId}.json`);

export default {
  getSingleCategory,
  getGarageCategoryByCategoryId,
  getGarageCategoryByUid,
  createCategory,
  updateCategory,
  deleteCategory,
};
