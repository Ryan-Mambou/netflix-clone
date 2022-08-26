import http from "./httpService";
import config from '../config.json'

const {apiEndPoint, apiKey} = config;

export const getPopular = () => {
    return http.get(`${apiEndPoint}/popular?api_key=${apiKey}`)
}

export const getLatest = () => {
    return http.get(`${apiEndPoint}/latest?api_key=${apiKey}`)
}

export const getTopRated = () => {
    return http.get(`${apiEndPoint}/top_rated?api_key=${apiKey}`)
}

export const getUpcoming = () => {
    return http.get(`${apiEndPoint}/upcoming?api_key=${apiKey}`)
}