import {config} from '../../config/config'
import axios from 'axios'

const baseUrl = config.url;

const searchByPoint = () => {
    return axios.get(`${baseUrl}/search`)
    .then((res) => {
        return res.data
    })
}

const searchByDate = () => {
    return axios.get(`${baseUrl}/search_by_date`)
    .then((res) => {
        return res.data
    })
}

export const HomePageService = {
    searchByPoint,
    searchByDate
}