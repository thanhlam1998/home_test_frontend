import React from 'react'
import './navBar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light homepage-navbar">
            <img className="mr-2" src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="logo"/>
            <div className="header-search mr-3">
                Home
                <br/>
                Testing
            </div>
            <div className="search-bar-container">
                <span className="search-icon">Hello</span>
                <input className="form-control search-bar" type="search" placeholder="Search stories by title, url or author"/>
            </div>
        </nav>
    )
}

export default Navbar
