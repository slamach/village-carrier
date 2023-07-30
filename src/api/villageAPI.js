import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc.dmitriisviridov.com/api/v1/',
});

const villageAPI = {
  async getVillages(token) {
    return axiosInstance.get('villages/villagesWithExtraData', {
      params: {
        page: -1,
        size: -1,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  async getVillagers(villageId, token) {
    return axiosInstance.get(`villages/${villageId}/villagersWithExtraData`, {
      params: {
        page: -1,
        size: -1,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  async getVillageInfo(villageId, token) {
    return axiosInstance.get(`villages/villageWithExtraData/${villageId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
  async fightRaid(raidId, token) {
    return axiosInstance.get(`raids/${raidId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  },
};

export default villageAPI;
