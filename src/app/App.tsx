import './App.css';
import { Header } from '../pages/header/Header';
import { Cards } from '../pages/cards/Cards';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { LoadingScreen } from '../pages/loading/LoadingScreen';
import { useEffect } from 'react';
import { useAppDispatch } from '../common/useAppDispatch';
import { cardsActions } from '../pages/cards/cards-reducer';
import {  isInitializedSelector } from '../pages/cards/cardsSelector';

function App() {
  const isInitialized = useSelector(isInitializedSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(cardsActions.setIsInitialized(true));
    }, 5000);
  }, []);

  if (!isInitialized) {
    return <LoadingScreen />;
  }
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
