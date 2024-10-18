import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  name: string;
};

const initialState: InitialState = {
  name: '',
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    setFilterName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {},
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
