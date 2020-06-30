import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';



const persistConfig = {
  blacklist: ['form'],
  key: 'reactreduxform',
  storage
};


// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleware = applyMiddleware(thunk);
// const store = createStore(persistedReducer, middleware);
// const persistor = persistStore(store);
// export { store, persistor };