import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // alte reduceri
  },
  // alte opțiuni, cum ar fi middleware
});

export default store;
