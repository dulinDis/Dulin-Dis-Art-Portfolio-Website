import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import galleryReducer from './gallery/gallery.reducer';
import stateStoreReducer from './state-store/state-store.reducer'

const persistConfig = {
  key:'root',
  storage,
  whitelist:['gallery']
}

export const rootReducer = combineReducers({
  gallery: galleryReducer,
  stateStore:stateStoreReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer)
