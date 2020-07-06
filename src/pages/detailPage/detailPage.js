import React from 'react'
import NavBar from './components/navBar/navbar'
import Content from './components/content/content'
import Footer from '../../components/footer/footer'
import './detailPage.scss'
const detailPage = () => {
    return (
        <div className="detailPage-container">
            <NavBar/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default detailPage
