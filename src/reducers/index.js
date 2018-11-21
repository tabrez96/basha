import { combineReducers } from 'redux';
import tasksReducer from './tasks';

console.log(tasksReducer, 'task reducer');

export default combineReducers({
  tasksReducer
});