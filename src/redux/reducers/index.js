import { CHECK, UNCHECK, ADD,CHANGE } from './../types';

const initialTodos = [
    {
        done: true,
        text: "task 1"
    }, {
        done: false,
        text: "task 2"
    }, {
        done: false,
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
    switch(action.type){
        case CHANGE:
            return action.payload
        default: 
            return value
    }
}