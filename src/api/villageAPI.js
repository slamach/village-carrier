import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://20.67.104.18/api/v1/villages/'
});

// TODO: Настроить пагинацию

const villageAPI = {
  async getVillages(token) {
    return axiosInstance.get('/', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  },
  async getVillagers(villageId, token) {
    return axiosInstance.get(`${villageId}/villagersWithExtraData`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
};

export default villageAPI;
