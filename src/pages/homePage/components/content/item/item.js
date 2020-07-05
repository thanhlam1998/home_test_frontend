import React, { useState, useEffect } from 'react'
import './item.scss'

const Item = (props) => {
    const [pastDate, setPastDate] = useState()

    function createMarkup(string) {
        return {__html: string};
    }

    useEffect(() => {
        if(props.item){
            const date = new Date(props.item.created_at_i * 1000)
            const now = new Date();
            const year = now.getFullYear() - date.getFullYear();
            if(year > 0){
                if(year === 1){
                    setPastDate(`${year} year ago`)
                } else {
                    setPastDate(`${year} years ago`)
                }
                return
            }
            const month = now.getMonth() - date.getMonth();
            if(month > 0){
                if(month === 1){
                    setPastDate(`${month} month ago`)
                } else {
                    setPastDate(`${month} months ago`)
                }
                return
            }
            const day = now.getDate() - date.getDate();
            if(day > 0){
                if(day === 1){
                    setPastDate(`${day} day ago`)
                } else {
                    setPastDate(`${day} days ago`)
                }
                return
            }
            const hour = now.getHours() - date.getHours();
            if(hour > 0){
                if(hour === 1){
                    setPastDate(`${hour} hour ago`)
                } else {
                    setPastDate(`${hour} hours ago`)
                }
                return
            }
            const minute = now.getMinutes() - date.getMinutes();
            if(minute > 0){
                if(minute === 1){
                    setPastDate(`${minute} minute ago`)
                } else {
                    setPastDate(`${minute} minutes ago`)
                }
                return
            }
        }
    }, [props.item])

    
    return (
        <div className="item-container">
            <div className="story-title">
                <a className="title" href = {`/items/${props.item.objectID}`}>
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
                <span>{pastDate}</span>
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
