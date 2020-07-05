import React, { useEffect, useState } from 'react'
import Story from './story/story'
import {DetailPageActions} from '../../../../actions'
import './content.scss'
import { connect } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

const Content = (props) => {
    const match = useRouteMatch();
    const [result, setResult] = useState()
    useEffect(() => {
        props.getDetailPage(match.params.id)
    }, [])

    useEffect(() => {
        if(props.detailPage.getDetailPageSuccess === true){
            setResult(props.detailPage.result)
        }
    }, [props.detailPage])

    return (
        <div className="content-container">
            {result &&
                <Story item={result}/>
            }   
        </div>
    )
}

const mapStateToProps = (state) => ({
    detailPage: state.detailPage
})

const mapDispatchToProps = dispatch => ({
    getDetailPage: (id) =>  dispatch(DetailPageActions.getDetailPage(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
