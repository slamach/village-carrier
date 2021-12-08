import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc-api.dmitrysviridov.ru/api/v1/villages/'
});

const villageAPI = {
  async getVillages(token) {
    return axiosInstance.get('/', {
      params: {
        page: -1,
        size: -1
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  },
  async getVillagers(villageId, token) {
    return axiosInstance.get(`${villageId}/villagersWithExtraData`, {
      params: {
        page: -1,
        size: -1
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
};

export default villageAPI;
