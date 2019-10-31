import { CHECK, UNCHECK, ADD, CHANGE, SET_POSTS_LOADING, SET_POSTS_ERROR, SET_POSTS_SUCCESS, SEARCH_CHANGE } from './../types';

const initialTodos = [
    {
        done: true,
        text: "task 1"
    }, {
        done: false,
        text: "task 2"
    }, {
        sdone: false,
        text: "task 3"
    }, {
        done: true,
        text: "task 4"
    }, {
        done: false,
        text: "task 5"
    }
]
export const listReducer = (todos = initialTodos, action) => {
    switch (action.type) {
        case CHECK:
            const checkobj = [...todos];
            checkobj[action.payload].done = true;
            return checkobj;
        case UNCHECK:
            const uncheckobj = [...todos];
            uncheckobj[action.payload].done = false;
            return uncheckobj;
        case ADD:
            return [...todos, { done: false, text: action.payload }]
        default:
            return todos;
    }
}
export const inputReducer = (value = '', action) => {
    switch (action.type) {
        case CHANGE:
            return action.payload
        default:
            return value
    }
}

export const searchReducer = (value = '', action) => {
    switch (action.type) {
        case SEARCH_CHANGE:
            return action.payload
        default:
            return value
    }
}

const initialPosts = {
    status: 'LOADING',
    data: []
}
export const postsReducer = (posts = initialPosts, action) => {
    switch (action.type) {
        case SET_POSTS_SUCCESS:
            return { status: 'SUCCESS', data: action.payload }
        case SET_POSTS_LOADING:
            return { status: 'LOADING', data: [] }
        case SET_POSTS_ERROR:
            return { status: 'ERROR', data: [] }
        default:
            return posts
    }
}