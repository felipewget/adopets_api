/**
 * This archive is dedicated to manage session in Localstorage
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

/**
 * Save session metadata in localstoge on browser
 * 
 * @param {String<email>} username 
 * @param {String<hash>}  access_key 
 * 
 * @return {Bool} true
 */
export const saveSession = async (username, access_key) => {

    localStorage.setItem('username', username );
    localStorage.setItem('access_key', access_key );

    return true; 

}

/**
 * Check if there is metadata of session saved in browser
 * 
 * @return {Bool}
 */
export const checkSession = async () => {

    let access_key = localStorage.getItem('access_key');

    let auth = true;

    if( access_key === undefined || access_key === null || access_key === "" ){
        auth = false;
    }

    return auth;

}

/**
 * Remove session metadata in localstoge on browser
 * 
 * @return {Bool} true
 */
export const deleteSession = async () => {

    localStorage.removeItem('username');
    localStorage.removeItem('access_key');

    return true; 

}

/**
 * Get username of loged user with metadata saved on browser
 * 
 * @return {String<name>}
 */
export const getUsername = () => {
    return localStorage.getItem('username');
}