import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vc.dmitriisviridov.com/api/v1/',
});

const authAPI = {
  async login(username, password) {
    return axiosInstance.post('auth/login', { username, password });
  },
  async register(username, password) {
    return axiosInstance.post('auth/register', { username, password });
  },
};

export default authAPI;
