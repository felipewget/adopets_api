/**
 * There are useful actions/requests methods about authentication
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import  axios from 'axios';
import  { 
    API_URL, 
    API_KEY 
} from './../constants';

/**
 * Is a est authentication
 * 
 * @description This is the first step of 3, in this step, we are autenticating a session to
 *              after to login with a user
 * 
 * @return      {JSON}  | Example: {"status": 200,"code": 200,"data": {"access_key": "...hash..."}}
 */
export const createSession = async () => {

    let params = {"system_api_key": API_KEY};
    
    let response = await axios.post( API_URL + '/auth/session-request', params );
  
    return response.data;

}

/**
 * Autenticate a user`s session
 * 
 * @description This is the second of 3 steps, in this step, we are autenticating the user with your email and password
 * 
 * @return      {JSON}  | Example  {"status": 200,"code": 200,"data": {"organization_user": {...metadata...},"access_key": ...hash...}}
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
