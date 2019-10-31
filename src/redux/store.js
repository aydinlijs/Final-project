import { createStore, combineReducers, applyMiddleware } from 'redux';
import { listReducer, inputReducer, postsReducer, searchReducer } from './reducers'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todosList: listReducer,
    value: inputReducer,
    posts: postsReducer,
    search: searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;