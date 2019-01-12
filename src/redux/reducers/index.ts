import { combineReducers } from 'redux';
import login from './login';
import order from './order';
import user from './user';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'order',
  storage,
};
const reducers = combineReducers({
  login,
  order: persistReducer(persistConfig, order),
  user: persistReducer(persistConfig, user),
});

export default reducers;