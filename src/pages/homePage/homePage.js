import React from 'react'
import NavBar from './components/navBar/navbar'
import SortBar from './components/sortBar/sortBar'
import Content from './components/content/content'
import './homePage.scss'

const homePage = () => {
    return (
        <div className="homepage-container">
            <NavBar/>
            <SortBar/>
            <Content/>
        </div>
    )
}

export default homePage
