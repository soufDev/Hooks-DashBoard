import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import reducers from './reducers';
// import Saga
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga);

export default store;