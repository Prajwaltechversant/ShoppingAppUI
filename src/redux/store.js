



import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import addUserSliceReducer from './slices/addUserSlice';
import storage from '@react-native-async-storage/async-storage';
import productSliceReducer from './slices/productSlice'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['addUser', 'products'],
  
};

const rootReducer = combineReducers({
  addUser: addUserSliceReducer,
  products:productSliceReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
