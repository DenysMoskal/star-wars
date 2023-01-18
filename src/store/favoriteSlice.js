import { createSlice } from '@reduxjs/toolkit';
import { omit } from 'lodash';
import { getLocalStorage } from '../utils/localStorage';

const initialState = getLocalStorage('store');

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setPersonToFavorite: (state, action) => {
      state.favorite = { ...state.favorite, ...action.payload };
    },
    removePersonFromFavorite: (state, action) => {
      state.favorite = omit(state.favorite, [action.payload]);
    },
  },
});

export const { removePersonFromFavorite, setPersonToFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
