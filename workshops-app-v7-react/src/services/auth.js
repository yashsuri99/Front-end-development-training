import axios from 'axios';
import config from '../config';

const login = async ( credentials ) => {
    const response = await axios.post( `${config.BASE_URL}/login`, credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    // Please be careful here - in meeting app "token" is sent (not "authToken")
    const { email, authToken } = response.data;

    localStorage.setItem( 'TOKEN', authToken );
    localStorage.setItem( 'EMAIL', email );
}

const logout = () => {
    localStorage.removeItem( 'TOKEN' );
    localStorage.removeItem( 'EMAIL' );
};

const getToken = () => {
    return localStorage.getItem( 'TOKEN' );
};

const getEmail = () => {
    return localStorage.getItem( 'EMAIL' );
};

const isAuthenticated = () => {
    if( localStorage.getItem( 'TOKEN' ) !== null ) {
        return true;
    } else {
        return false;
    }
};

export {
    login,
    logout,
    getToken,
    getEmail,
    isAuthenticated
};