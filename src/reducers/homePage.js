import {HomePageConstants} from '../actions/constants/homepage'

const initialState = {
    searchRequestPending: false,
    searchRequestSuccess: false,
    searchRequestError: null
}

const HomePage = (state = initialState, action) => {
    switch (action.type){
        case HomePageConstants.SEARCH_REQUEST_PENDING:
            return {
                searchRequestPending: true,
                searchRequestSuccess: false,
                searchRequestError: null
            }
        case HomePageConstants.SEARCH_REQUEST_SUCCESS:
            return {
                searchRequestPending: false,
                searchRequestSuccess: true,
                searchRequestError: null,
                result: action.payload
            }
        case HomePageConstants.SEARCH_REQUEST_ERROR:
            return {
                searchRequestPending: false,
                searchRequestSuccess: false,
                searchRequestError: action.payload
            }
        default:
            return state;
    }
}

export default HomePage
