import React from 'react'
import {RiSearchLine} from 'react-icons/ri'
import {FiSettings} from 'react-icons/fi'
import {GoSettings} from 'react-icons/go'
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
                <span className="search-icon"><RiSearchLine/></span>
                <input className="form-control search-bar" type="search" placeholder="Search stories by title, url or author"/>
            </div>
            <div className="text-container">
                <span className="ml-2 mr-2 font-weight-bold">by</span>
                <img className="logo-algolia mr-1" src="https://logosandtypes.com/wp-content/uploads/algolia.svg" alt="logo"></img>
                <span className="text-light text-algolia">Algolia</span>
            </div>
            <a className="setting" href="/">
                <FiSettings className="setting-icon"/>
                <span className="text-setting">Settings</span>
                <GoSettings className="setting-responsive-icon"/>
            </a>
        </nav>
    )
}

export default Navbar
