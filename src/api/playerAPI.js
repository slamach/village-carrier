import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc-api.dmitrysviridov.ru/api/v1/players/'
});

const villageAPI = {
  async getUserData(token) {
    return axiosInstance.get('/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
};

export default villageAPI;
