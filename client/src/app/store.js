import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import sneakerReducer from '../features/sneakers/sneakerSlice';
import { loadState, saveState } from '../utils/localStorageHandler';
import { save, load} from 'redux-localstorage-simple';

// const persistedState = loadState();
// console.log(persistedState, "this is persisted");

export const store = configureStore({
  // middleware: [save({ namespace: 'sneakers' })],
  reducer: {
    // counter: counterReducer,
    sneakers: sneakerReducer,
  },
  // preloadedState: load({ namespace: 'sneakers' }),
  devTools: process.env.NODE_ENV === 'development',
});

// store.subscribe(() => {
//   saveState(store.getState());
// });