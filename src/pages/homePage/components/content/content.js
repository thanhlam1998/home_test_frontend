import React, { useEffect, useState } from 'react'
import Item from './item/item'
import {HomePageActions} from '../../../../actions'
import Pagination from 'react-js-pagination'
import './content.scss'
import { connect } from 'react-redux'

const Content = (props) => {
    const [page, setPage] = useState(1)
    useEffect(() => {
        props.getSearchRequest()
    }, [])

    useEffect(() => {
       if(props.homepage.searchRequestSuccess === true){
           setHits(props.homepage.result.hits)
       }
    }, [props.homepage])

    const [hits, setHits] = useState()
    return (
        <div className="content-container">
            {hits && hits.map((item, index) => item.title && <Item item={item} key={index}/>)}
            {hits && 
            <Pagination
                className = "pagination"
                hideNavigation
                activePage={page}
                itemsCountPerPage={20}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                onChange={(pageNumber) => setPage(pageNumber)}
            />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    homepage: state.homepage
})

const mapDispatchToProps = dispatch => ({
    getSearchRequest: () =>  dispatch(HomePageActions.getSearchByPoint())
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
