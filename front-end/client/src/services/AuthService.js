import axios from 'axios';
import Config from '../Config';

var URL = Config.URL;

const AuthService = {
  // metoda pro přihlášení uživatele
  login: async (tag, password) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post(`${URL}/auth/login`, { tag, password });
    const { valid } = response.data;
    return { valid }
  },
  // metoda pro kontrolu, jestli je uživatel přihlášen
  status: async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get(`${URL}/auth/status`);
    const { valid } = response.data;
    return { valid }
  },
  // metoda pro registraci nového uživatele
  register: async (tag, password, passwordValidation) => {
    if (password === passwordValidation) {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${URL}/auth/register`, { tag, password })
      const { valid } = response.data;
      return { valid }
    }
    return null
  },
};

export default AuthService;
