import './App.css';
import { Header } from '../pages/header/Header';
import { Cards } from '../pages/cards/Cards';
import { useSelector } from 'react-redux';
import { LoadingScreen } from '../pages/loading/LoadingScreen';
import { useEffect } from 'react';
import { useAppDispatch } from '../common/useAppDispatch';
import { cardsActions } from '../pages/cards/cards-reducer';
import { isInitializedSelector } from '../pages/cards/cardsSelector';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '../common/PATH';

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
      <Routes>
        <Route path="/character" element={<Cards />} />
        <Route path="*" element={<Navigate to={PATHS.app} />} />
      </Routes>
    </div>
  );
}

export default App;
