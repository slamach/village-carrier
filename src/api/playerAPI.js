import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://20.67.104.18/api/v1/players/'
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
