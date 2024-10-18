import { configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from '../pages/cards/cards-reducer';
import { filterActions, filterReducer } from '../pages/filter/filter-slice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

//@ts-ignore
window.store = store;
