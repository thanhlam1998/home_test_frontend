import React from 'react'
import NavBar from './components/navBar/navbar'
import Content from './components/content/content'
import './detailPage.scss'
const detailPage = () => {
    return (
        <div className="detailPage-container">
            <NavBar/>
            <Content/>
        </div>
    )
}

export default detailPage
