import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from '../pages/cards/cards-reducer';

export const store = configureStore({
  reducer: cardsReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
