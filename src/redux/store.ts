import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};

const middlewares = [thunkMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default; // eslint-disable-line @typescript-eslint/no-var-requires
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

const persistor = persistStore(store, {}, () => {
  //   store.dispatch(appStartup());
});

export {store, persistor};
