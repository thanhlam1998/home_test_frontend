import {DetailPageConstants} from '../actions/constants/detailPage'

const initialState = {
    getDetailPagePending: false,
    getDetailPageSuccess: false,
    getDetailPageError: null
}

const DetailPage = (state = initialState, action) => {
    switch (action.type){
        case DetailPageConstants.DETAIL_PAGE_PENDING:
            return {
                getDetailPagePending: true,
                getDetailPageSuccess: false,
                getDetailPageError: null
            }
        case DetailPageConstants.DETAIL_PAGE_SUCCESS:
            return {
                getDetailPagePending: false,
                getDetailPageSuccess: true,
                getDetailPageError: null,
                result: action.payload
            }
        case DetailPageConstants.DETAIL_PAGE_ERROR:
            return {
                getDetailPagePending: false,
                getDetailPageSuccess: false,
                getDetailPageError: action.payload
            }
        default:
            return state;
    }
}

export default DetailPage
