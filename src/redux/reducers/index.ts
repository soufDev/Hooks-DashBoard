import { combineReducers } from 'redux';
import login from './login';
import order from './order';
import user from './user';
const reducers = combineReducers({
  login,
  order,
  user
});

export default reducers;