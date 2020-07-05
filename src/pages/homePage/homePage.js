import React, { useState } from 'react'
import NavBar from './components/navBar/navbar'
import SortBar from './components/sortBar/sortBar'
import Content from './components/content/content'
import './homePage.scss'

const HomePage = () => {
    const [results, setResult] = useState()
    return (
        <div className="homepage-container">
            <NavBar/>
            <SortBar/>
            <Content  
                results = {results}
                setResult = {setResult}/>
        </div>
    )
}

export default HomePage
