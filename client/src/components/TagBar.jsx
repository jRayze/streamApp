import React from 'react';
import styled, { css } from 'styled-components'


const Badge = styled.button`
    border-radius: 16px !important;
    border: 1px solid #4b4b4b;
    background-color: #373737;
    height: 30px;
    display: flex !important;
    align-items: center !important;
    width: auto;
    color: white;
    font-size: 13px !important;
    margin: 12px 12px 12px 0px;
    cursor: pointer;
    min-inline-size: fit-content;

    ${props => props.active && css`
        background: white;
        color: #373737;
    `}
    ${props => props.first && css`
        margin-left: 24px;
    `}
`;

const TagBar = ({textSearch, updateSearch}) => {

    const addToSearch = (value) => {
        console.log(value);
        document.getElementById('searchInput').setAttribute('value', value);
        updateSearch(value);
    }

    return (
        <div className='tagBar'>
            <Badge first active onClick={(e) => addToSearch(e.target.textContent)}>Tous</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>League Of Legend</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Rap</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Orelsan</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Laylow</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Primitif</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Vald</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)} >Jeux</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Call of duty</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Dofus</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>France</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Actu</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Apple</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Macbook</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Informatique</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>Javascript</Badge>
            <Badge onClick={(e) => addToSearch(e.target.textContent)}>React</Badge>

        </div>
    );
};

export default TagBar;