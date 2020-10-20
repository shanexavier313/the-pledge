import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  blacklist: ['alert'],
  storage,
}

export default function configureStore() {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, devToolsEnhancer())
  const persistor = persistStore(store)

  return { store, persistor }
}
