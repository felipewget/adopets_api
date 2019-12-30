import  axios from 'axios';
import  { 
    API_URL, 
    API_KEY 
} from './../constants';

/**
 * Autenticate a user`s session
 * 
 * @description This is the first step of 3, in this step, we are autenticating a session to
 *              after login with a user
 * 
 * @return      JSON    <{"organization_user": {"email":"usuario-test@adopets.com", "password": "123123"}}>
 */
export const createSession = async () => {

    let params = {"system_api_key": API_KEY };
    
    let response = await axios.post( API_URL + '/auth/session-request', params );
  
    return response.data;

}

/**
 * 
 */
export const registerUser = async ( email, password, access_token ) => {

    let params = {
        organization_user: {
            email   : email, 
            password: password
        }
    };

    let response = await axios.post( API_URL + '/auth/session-register', params, {
        headers: { "Authorization": "Bearer " + access_token }
    });
  
    return response.data;

}

export const checkAuth = async ( token ) => {}
