import {HomePageConstants} from './constants/homepage'
import {HomePageService} from '../services/apis/homepage'

function getSearchByPoint(page){
    return (dispatch) => {
      dispatch(request());
      HomePageService.searchByPoint(page)
      .then(
        res =>{
          dispatch(success(res))
        }
      ).catch(error => {
        dispatch(failure(error))
      }) 
    };
    function request(){ return{type: HomePageConstants.SEARCH_REQUEST_PENDING}};
    function success(res){return{type: HomePageConstants.SEARCH_REQUEST_SUCCESS, payload: res}};
    function failure(error){return{type: HomePageConstants.SEARCH_REQUEST_ERROR, payload: error}};
};

export const HomePageActions = {
    getSearchByPoint
}