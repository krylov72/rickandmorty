import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card, CardState } from './Card';
import { Results, cardsApi } from '../../api/cardsApi';
import { createAppAsyncThunk } from '../../common/create-async-thunk';

type InitialState = {
  cards: Results[];
  loading: boolean;
  error: null;
};

const initialState: InitialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload.map((c) => ({ ...c }));
    });
  },
});

export const cardsReducer = cardsSlice.reducer;
export const cardsActions = cardsSlice.actions;

export const fetchCards = createAppAsyncThunk<Results[], void>(
  'cards,fetchCards',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await cardsApi.getCharacter();
      return res.data.results;
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);
