import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc-api.dmitrysviridov.ru/api/v1/'
});

const villageAPI = {
  async getUserData(token) {
    return axiosInstance.get('players', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  },
  async getInventory(playerId, token) {
    return axiosInstance.get(`inventories/${playerId}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  },
  async makeNewWithdrawal(token) {
    // TODO: Добавить выбор деревни для вывода
    return axiosInstance.post('withdrawals', 1, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-type': 'application/json'
      }
    });
  }
};

export default villageAPI;
