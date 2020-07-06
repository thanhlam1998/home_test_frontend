import React, { useEffect, useState } from 'react'
import Story from './story/story'
import CommentTree from './comment/commentTree'
import {DetailPageActions} from '../../../../actions'
import './content.scss'
import { connect } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

const Content = (props) => {
    const match = useRouteMatch();
    const [result, setResult] = useState()
    const [children, setChildren] = useState()


    useEffect(() => {
        props.getDetailPage(match.params.id)
    }, [])

    useEffect(() => {
        if(props.detailPage.getDetailPageSuccess === true){
            setResult(props.detailPage.result)
            setChildren(props.detailPage.result.children)
        }
    }, [props.detailPage])

    return (
        <div className="content-container">
            {result &&
                <Story item={result}/>
            }
            {children && 
                <CommentTree nodes={children}/>}
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
