import React, { useState } from 'react'
import NavBar from './components/navBar/navbar'
import SortBar from './components/sortBar/sortBar'
import Content from './components/content/content'
import Footer from '../../components/footer/footer'
import './homePage.scss'

const HomePage = () => {
    const [results, setResults] = useState(0)
    const [processingTime, setProcessingTime] = useState(0)
    return (
        <div className="homepage-container">
            <NavBar/>
            <SortBar
                results = {results}
                processingTime = {processingTime}/>
            <Content  
                results = {results}
                setResults = {setResults}
                setProcessingTime ={setProcessingTime}/>
            <Footer/>
        </div>
    )
}

export default HomePage
