import axios from 'axios';
import config from '../config';
import { getToken } from './auth';

const BASE_URL = config.BASE_URL;

const getWorkshops = async ( page ) => {
    const url = `${BASE_URL}/workshops?_page=${page}`;

    // NOTE: In meetings app 'Bearer ' should not be added
    const response = await axios.get(
        url,
        {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        }
    );
    return response.data;
}

const getWorkshopById = async ( id ) => {
    const url = `${BASE_URL}/workshops/${id}`;

    // NOTE: In meetings app 'Bearer ' should not be added
    const response = await axios.get(
        url,
        {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        }
    );
    return response.data;
}

export {
    getWorkshops,
    getWorkshopById
};