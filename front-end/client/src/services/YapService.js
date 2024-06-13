import axios from 'axios';
import Config from '../Config';

var URL = Config.URL;

const YapService = {
    yappies: async (yappieId) => {
        const response = await axios.get(`${URL}/yappies/${yappieId}`);
        const {users} = response.data.yappie;
        return {users};
      },
    user: async (userId) => {
        const response = await axios.get(`${URL}/user/${userId}`);
        const {user} = response.data;
        return {user};
    }
}

export default YapService;