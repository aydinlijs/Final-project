import { createStore, combineReducers } from 'redux';
import { listReducer, inputReducer } from './reducers'

const rootReducer = combineReducers({
    todosList: listReducer,
    value: inputReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

export default store;