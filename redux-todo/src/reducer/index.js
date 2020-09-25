import { combineReducers } from 'redux';

import todos from './todo';
import form from './form';

export default combineReducers({ todos, form });