import React from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';
import { useState } from 'react';

const App = () => {
  const [data, setData] = React.useState(null);
  const [textSearch, setTextSearch] = useState('');

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='background-body'>
      <Header textSearch={textSearch} setTextSearch={setTextSearch}/>
      <Board textSearch={textSearch} setTextSearch={setTextSearch}/>
      <p>{data}</p>
    </div>
  );
};

export default App;

