import {DetailPageConstants} from './constants/detailPage'
import {DetailPageService} from '../services/apis/detailPage'

function getDetailPage(id){
    return (dispatch) => {
      dispatch(request());
      DetailPageService.getDetailPage(id)
      .then(
        res =>{
          dispatch(success(res))
        }
      ).catch(error => {
        dispatch(failure(error))
      }) 
    };
    function request(){ return{type: DetailPageConstants.DETAIL_PAGE_PENDING}};
    function success(res){return{type: DetailPageConstants.DETAIL_PAGE_SUCCESS, payload: res}};
    function failure(error){return{type: DetailPageConstants.DETAIL_PAGE_ERROR, payload: error}};
};

export const DetailPageActions = {
    getDetailPage
}