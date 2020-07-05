import React from 'react'
import './sortBar.scss'

const sortBar = () => {
    return (
        <div className="sort-bar-container mt-2 mb-2">
            <span>
                <span className="search-filter-text">Search</span>
                <select className="dropdown" defaultValue="Stories">
                    <option value="All">All</option>
                    <option value="Stories">Stories</option>
                    <option value="Comments">Comments</option>
                </select>
            </span>
            <span>
                <span className="search-filter-text">by</span>
                <select className="dropdown">
                    <option value="Popularity">Popularity</option>
                    <option value="Date">Date</option>
                </select>
            </span>
            <span>
                <span className="search-filter-text">for</span>
                <select className="dropdown">
                    <option value="All time">All time</option>
                    <option value="Last 24h">Last 24h</option>
                    <option value="Past Week">Past Week</option>
                    <option value="Past Month">Past Month</option>
                    <option value="Past Year">Past Year</option>
                </select>
            </span>
        </div>
    )
}

export default sortBar
