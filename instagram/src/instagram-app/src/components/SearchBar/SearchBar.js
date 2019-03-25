import React from 'react';
import './SearchBar.css';
const SearchBar = props => {
    return (
        <div className="search-bar-header">
            <div className="logo">
                <i className="fab fa-instagram"></i>
                <p className="pipe">|</p>
                 <h3>Instagram</h3>
            </div>
            <form className="search-input">
                <input className="search" placeholder="Search"></input>
            </form>

            <div className ="icons">
                <i class="fas fa-compass"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;