import {config} from '../../config/config'
import axios from 'axios'

const baseUrl = config.url;

const searchByPoint = (page) => {
    return axios.get(`${baseUrl}/search`, {
        params:{
            page: page
        }
    })
    .then((res) => {
        return res.data
    })
}

const searchByDate = (page) => {
    return axios.get(`${baseUrl}/search_by_date`, {
        params:{
            page: page
        }
    })
    .then((res) => {
        return res.data
    })
}

export const HomePageService = {
    searchByPoint,
    searchByDate
}