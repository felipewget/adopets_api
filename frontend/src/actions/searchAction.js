import  axios from 'axios';
import  { 
    API_URL, 
    API_KEY 
} from './../constants';

export const searchPet = async ( search ) => {

    let params = {};
    // let auth_token = localStorage.getItem('auth_token');

    let response = await axios.post( API_URL + '/pet/search', params, {
        headers: { "system_api_key": API_KEY }
    });
  
    return response.data;

}