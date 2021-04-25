import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kirito2911/podcastr' || 'http://localhost:3333/'
})