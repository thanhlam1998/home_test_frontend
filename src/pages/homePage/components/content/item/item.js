import React, { useState } from 'react'
import './item.scss'

const Item = (props) => {
    const [pastDate, setPastDate] = useState()

    function createMarkup(string) {
        return {__html: string};
    }

    if(props.item){
        const date = new Date(props.item.created_at_i * 1000)
        const now = new Date();
    }
    return (
        <div className="item-container">
            <div className="story-title">
                <a className="title" href = "/">
                    <span>{props.item.title}</span>
                </a>
                {props.item.url &&
                <a className="link" target="blank" href = {props.item.url}>({props.item.url})</a>}
            </div>
            <div className="item-meta">
                <span>{props.item.points} {props.item.points > 1 ? "points" : "point"}</span>
                <span className="separator">|</span>
                <span>{props.item.author}</span>
                <span className="separator">|</span>
                <span>2 years ago</span>
                <span className="separator">|</span>
                <span>{props.item.num_comments} {props.item.num_comments > 1 ? "comments" : "comment"}</span>
            </div>
                {props.item.story_text && 
                <div className="story-text" dangerouslySetInnerHTML = {createMarkup(props.item.story_text)}>
                </div>}
        </div>
    )
}

export default Item
