import React, { useEffect, useState } from 'react'
import Item from './item/item'
import {HomePageActions} from '../../../../actions'
import Pagination from 'react-js-pagination'
import './content.scss'
import { connect } from 'react-redux'

const Content = (props) => {
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        if(props.filterBy === 'Popularity')
        {
            props.getSearchRequest(page-1)
        } else {
            props.getSearchRequestByDate(page-1)
        }
    }, [page, props.filterBy])

    useEffect(() => {
       if(props.homepage.searchRequestSuccess === true){
           setTotal(props.homepage.result.nbHits)
           setHits(props.homepage.result.hits)
           props.setResults(props.homepage.result.nbHits)
           props.setProcessingTime(props.homepage.result.processingTimeMS / 1000)
       }
    }, [props.homepage])

    const [hits, setHits] = useState()
    return (
        <div className="content-container">
            {hits && hits.map((item, index) => (item.title || item.story_title) && <Item item={item} key={index}/>)}
            {hits && 
            <Pagination
                className = "pagination"
                hideNavigation
                activePage={page}
                itemsCountPerPage={20}
                totalItemsCount={total > 20*50 ? 20*50 : total}
                pageRangeDisplayed={6}
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
    getSearchRequest: (page) =>  dispatch(HomePageActions.getSearchByPoint(page)),
    getSearchRequestByDate: (page) =>  dispatch(HomePageActions.getSearchByDate(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
