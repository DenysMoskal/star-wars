import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './favoriteSlice';
import { setLocalStorage } from '@utils/localStorage';

const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
});

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorite);
});

export default store;
