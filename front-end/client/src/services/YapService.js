import axios from 'axios';
import Config from '../Config';

var URL = Config.URL;

const YapService = {
    yappies: async () =>{
        const response = await axios.get(`${URL}/${global.status}`);
        const {yappies} = response.data;
        return yappies;
    },
    yaps: async () => {
        const response = await axios.get(`${URL}/yaps`);
      },

    user: async (userId) => {
        const response = await axios.get(`${URL}/user/${userId}`);
        const {user} = response.data;
        return user;
    }
}

export default YapService;