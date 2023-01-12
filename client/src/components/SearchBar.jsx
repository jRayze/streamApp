import React from 'react';
import searchIcon from '../assets/search.svg';

const SearchBar = ({textSearch, updateSearch}) => {

    const search = (e) => {
        e.preventDefault()
        const searchBar = document.getElementById('searchInput')
        updateSearch(searchBar.value);
        searchBar.value = '';
    }
    return (
        <>
            <div className='searchBar'>
                <form onSubmit={(e) => {search(e)}} className="form-inline" id="formSearch" action=''>
                    <input id="searchInput" className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" id='buttonSearch' type="submit">
                        <img id="searchIcon" src={searchIcon} alt="" />
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchBar;