import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://api.sanctum.test',
    withCredentials: true,
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //  }
});

export default apiClient;