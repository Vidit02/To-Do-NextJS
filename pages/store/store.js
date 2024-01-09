import { createStore } from "redux";
import todoReducer from "./reducer";



const store = createStore(todoReducer)

export default store;


// import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import todoReducer from './reducer';
// import { configureStore } from '@reduxjs/toolkit';
// const persistConfig = {
//   key: 'root',
//   storage,
//   // Specify the reducers you want to persist
//   whitelist: ['todoReducer'], // In this example, we persist the 'user' reducer
// };
// const persistedReducer = persistReducer(persistConfig, todoReducer);
// export const store = configureStore(persistedReducer);
// export const persistor = persistStore(store);