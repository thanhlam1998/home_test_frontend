import {config} from '../../config/config'
import axios from 'axios'

const baseUrl = config.url;

const getDetailPage = (id) => {
    return axios.get(`${baseUrl}/items/${id}`)
    .then((res) => {
        return res.data
    })
}

export const DetailPageService = {
    getDetailPage
}