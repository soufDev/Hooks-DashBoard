import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * replace redux, redux saga by @rematch
 */
import { init, RematchRootState } from '@rematch/core';
import * as models  from './models';

// import reducers
import reducers from './reducers';
// import Saga
import rootSaga from './saga';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

console.log({ login: models.login });

const store = init({
  models,
});
// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// )

// const persistor = persistStore(store);
// sagaMiddleware.run(rootSaga);

export type Dispatch = typeof store.dispatch;
export type Store = typeof store
export type isRootState = RematchRootState<typeof models>

export  { store };