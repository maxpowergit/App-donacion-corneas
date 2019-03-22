import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import logger from 'redux-logger'

// Reducers
const estadoInicial = {
  tiempoTranscurrido: false
}

const reducer = (state = estadoInicial, action)=> {
  switch (action.type) {
    case 'GUARDAR_TELEFONO':
      return { ...state, telefono: action.telefono }
    case 'TIEMPO_TRANSCURRIDO':
      return { ...state, tiempoTranscurrido: action.tiempoTranscurrido }
    default:
      return state
  }
}

// Configuración del Store
const middlewares = []

const persistConfig = {
    key: 'root',
    AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middlewares)
  )
)

const persistor = persistStore(store)

export { store, persistor }
