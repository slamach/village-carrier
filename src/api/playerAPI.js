import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://isbd.vlados.me/api/v1/',
});

const villageAPI = {
  async getUserData(token) {
    return axiosInstance.get('players', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  async getInventory(playerId, token) {
    return axiosInstance.get(`inventories/${playerId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  async makeNewWithdrawal(token) {
    // TODO: Добавить выбор деревни для вывода (?)
    return axiosInstance.post(
      'withdrawals',
      {
        villageId: 1,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
  },
  async getKits(token) {
    return axiosInstance.get('kits', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  async obtainKit(kitId, token) {
    return axiosInstance.get(`kits/${kitId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};

export default villageAPI;
