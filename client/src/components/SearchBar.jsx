import React from 'react';
import searchIcon from '../assets/search.svg';

const SearchBar = ({textSearch, updateSearch}) => {


    const setValue = (val) => {
        console.log(val);
        document.getElementById('searchInput').setAttribute('value', val);
    }

    return (
        <>
            <div className='searchBar'>
                <form className="form-inline" id="formSearch">
                    <input onChange={(e) => {updateSearch(e.target.value)}} id="searchInput" className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" id='buttonSearch' type="submit">
                        <img id="searchIcon" src={searchIcon} alt="" />
                    </button>
                </form>
            </div>
        </>
    );
};

export default SearchBar;