import { combineReducers } from 'redux';
import login from './login';
import order from './order';
import user from './user';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistOrderConfig = {
  key: 'order',
  storage,
};
const persistUserConfig = {
  key: 'user',
  storage,
};
const reducers = combineReducers({
  login,
  order: persistReducer(persistOrderConfig, order),
  user: persistReducer(persistUserConfig, user),
});

export default reducers;