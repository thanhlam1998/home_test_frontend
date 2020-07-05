import {combineReducers} from 'redux'
import HomePage from './homePage'
import DetailPage from './detailPage'

const rootReducer = combineReducers({
    homepage: HomePage,
    detailPage: DetailPage
})

export default rootReducer