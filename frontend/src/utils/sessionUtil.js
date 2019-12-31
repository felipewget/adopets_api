export const saveSession = async (username, access_key) => {

    localStorage.setItem('username', username );
    localStorage.setItem('access_key', access_key );

    return true; 

}

export const checkSession = async () => {

    let access_key = localStorage.getItem('access_key');
    let auth = true;

    if( access_key && access_key === undefined || access_key === null || access_key === "" ){
        auth = false;
    }

    return auth;

}

export const deleteSession = async () => {

    localStorage.removeItem('username');
    localStorage.removeItem('access_key');

    return true; 

}