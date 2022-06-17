import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileBar = () => {
    
    const letter = 'J'
    //const [letter, setLetter] = useState('?');

    const Circle = styled.div `
        border-radius: 50%;
        width: 24px;
        height: 24px;
        padding: 10px;
        background: #fff;
        border: 3px solid #000;
        color: #000;
        text-align: center;
        font: 24px Arial, sans-serif;
        
    `;

    //setLetter('J');
    return (
        <Circle >
            <span style={{marginBottom: "5px"}} >{letter}</span>
        </Circle>
    );
};

export default ProfileBar;