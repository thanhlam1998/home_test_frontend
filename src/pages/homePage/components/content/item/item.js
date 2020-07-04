import React from 'react'
import './item.scss'

const item = (props) => {
    return (
        <div className="item-container">
            <div>
                <a className="title" href = "/">
                    <span >Stephen hawking has died</span>
                </a>
                <a className="link" href = "/">(http://www.bbc.com/news/uk-43396008)</a>
            </div>
            <div className="item-meta mt-1">
                <span>6015 points</span>
                <span className="separator">|</span>
                <span>Cognito</span>
                <span className="separator">|</span>
                <span>2 years ago</span>
                <span className="separator">|</span>
                <span>436 comments</span>
            </div>
        </div>
    )
}

export default item
