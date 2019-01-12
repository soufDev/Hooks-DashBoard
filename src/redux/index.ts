import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import reducers from './reducers';
// import Saga
import rootSaga from './saga';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export  { store, persistor };