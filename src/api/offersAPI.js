import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc-api.dmitrysviridov.ru/api/v1/'
});

// TODO: Настроить пагинацию

const villageAPI = {
  async getOffersByVillagerId(villagerId, token) {
    return axiosInstance.get('offers/filter', {
      // TODO: Сделать нормальный reputationLevel
      params: {
        villagerId,
        reputationLevel: 1
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  },
  async makeNewDeal(offerId, token) {
    return axiosInstance.post('deals', offerId, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-type': 'application/json'
      }
    });
  }
};

export default villageAPI;
