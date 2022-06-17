import React from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';
import { useState } from 'react';

const App = () => { 
  const [textSearch, setTextSearch] = useState('');

  return (
    <div className='background-body'>
      <Header textSearch={textSearch} setTextSearch={setTextSearch}/>
      <Board textSearch={textSearch} setTextSearch={setTextSearch}/>
    </div>
  );
};

export default App;

