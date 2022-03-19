import config from '../config';
import axios from 'axios';
import { getToken } from './auth';

const BASE_URL = config.BASE_URL;

const getSessions =  async( id ) => {
    const url = `${BASE_URL}/workshops/${id}/sessions`;

    const response = await axios.get(
        url,
        {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        }
    );

    return response.data;
};

const postSession = async ( session ) => {
    const url = `${BASE_URL}/sessions`;

    const response = await axios.post( url, session, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    });
    return response.data;
}

const downvote = async ( sessionId ) => {
    const url = `${BASE_URL}/sessions/${sessionId}/downvote`;

    const response = await axios.put( url, null, {
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    return response.data;
}

const upvote = async ( sessionId ) => {
    const url = `${BASE_URL}/sessions/${sessionId}/upvote`;

    const response = await axios.put( url, null, {
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    return response.data;
}

export {
    getSessions,
    postSession,
    upvote,
    downvote
};