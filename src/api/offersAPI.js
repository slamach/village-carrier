import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc-api.dmitrysviridov.ru/api/v1/offers/'
});

// TODO: Настроить пагинацию

const villageAPI = {
  async getOffersByVillagerId(villagerId, token) {
    return axiosInstance.get('filter', {
      params: {
        villagerId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
};

export default villageAPI;
