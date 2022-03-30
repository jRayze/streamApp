import React from 'react';
import logoYoutube from '../assets/yt-logo.svg';
import collapseButton from '../assets/collapse-btn.svg'
import SearchBar from './SearchBar';
import ProfileBar from './ProfileBar';
import TagBar from './TagBar';

const Header = ({textSearch, setTextSearch}) => {

    return (
        <>
            <div className='header'>
                <div className='leftHeader'>
                    <button type="button" className='btn' id="collapse">
                        <img src={collapseButton} alt="" />
                    </button>
                    <img src={logoYoutube} alt="Youtube icon" className="logo-youtube" />
                    <span id="country-code">FR</span>
                </div>
                <SearchBar textSearch={textSearch} updateSearch={setTextSearch}/>
                <div className='rightHeader'>
                    <ProfileBar></ProfileBar>
                </div>
            </div>
            <TagBar textSearch={textSearch} updateSearch={setTextSearch}/>
        </>
    );
};

export default Header;