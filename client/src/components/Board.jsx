import React from 'react';
import Video from './Video';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div `
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`;

const Board = ({textSearch, setTextSearch}) => {

    const [req, setReq] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/api/search/${textSearch}`)
        .then((response) => {
            console.log(response);
            setReq(response.data.items);
        })
    }, [textSearch]);

    return (
        <Container className='board-container'>
            <Row id="video-container">
            {
                req && req.map((elem, id) => {
                    if (elem.snippet.description !== '') {
                        return (<Video key={id+'_'+elem.id} dataVideo={elem} />)
                    }
                })
            }
            </Row>
        </Container>
    );
};

export default Board;