import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { cardsApi } from '../api/cardsApi';
import { Header } from '../pages/header/Header';
import { Cards } from '../pages/cards/Cards';

function App() {
  useEffect(() => {
    cardsApi.getCharacter().then((res) => {
      console.log(res.data);
    });
  });
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
