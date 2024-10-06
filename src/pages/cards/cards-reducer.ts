import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card, CardState } from './Card';
import { BaseResponse, Results, cardsApi } from '../../api/cardsApi';
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
      state.cards = action.payload.results.map((c) => ({ ...c }));
    });
  },
});

export const cardsReducer = cardsSlice.reducer;
export const cardsActions = cardsSlice.actions;

export const fetchCards = createAppAsyncThunk<BaseResponse,string>(
  'cards,fetchCards',
  async (url, { dispatch, rejectWithValue }) => {
    try {
      const res = await cardsApi.getCharacter(url);
      return res.data;
    } catch (e) {
      return rejectWithValue(null);
    }
  }
);
