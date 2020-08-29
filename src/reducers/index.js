import {combineReducers} from 'redux'
import todosReducer from  './todos'
import inProgress from './inProgress'
import completed from './completed'

const rootReducer = combineReducers({ 
    todos: todosReducer, inProgress: inProgress, completed: completed
});

export default rootReducer;