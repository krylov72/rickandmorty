import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card, CardState } from './Card';
import { BaseResponse, Results, cardsApi } from '../../api/cardsApi';
import { createAppAsyncThunk } from '../../common/create-async-thunk';

type InitialState = {
  cards: Results[];
  loading: boolean;
  isInitialized: boolean;
  error: string | null;
};

const initialState: InitialState = {
  cards: [],
  loading: false,
  isInitialized: false,
  error: null,
};

const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.results.map((c) => ({ ...c }));
      })
      .addCase(fetchCards.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith('/pending') || action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')
          );
        },
        (state, action) => {
          if (action.type.endsWith('/pending')) {
            state.loading = true;
          } else if (action.type.endsWith('/fulfilled')) {
            state.loading = false;
          } else if (action.type.endsWith('/rejected')) {
            state.loading = false;
          }
        }
      );
  },
});

export const cardsReducer = cardsSlice.reducer;
export const cardsActions = cardsSlice.actions;

export const fetchCards = createAppAsyncThunk<BaseResponse, string>(
  'cards,fetchCards',
  async (url, { dispatch, rejectWithValue }) => {
    try {
      const res = await cardsApi.getCharacter(url);
      return res.data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
