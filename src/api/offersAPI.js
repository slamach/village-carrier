import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc-api.dmitrysviridov.ru/api/v1/'
});

const villageAPI = {
  async getOffersByVillagerId(villagerId, token) {
    return axiosInstance.get('offers/allowedOffers', {
      params: {
        page: -1,
        size: -1,
        villagerId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  },
  async makeNewDeal(offerId, token) {
    return axiosInstance.post(
      'deals',
      {
        offerId
      },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
  },
  async getVillagerInfo(villagerId, token) {
    return axiosInstance.get(`villagers/villagerWithExtraData/${villagerId}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
};

export default villageAPI;
