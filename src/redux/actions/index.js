import { CHECK, UNCHECK, ADD, CHANGE } from './../types';

export const addTodo = payload => {
    return {
        type: ADD,
        payload
    }
}
export const checkTodo = payload => {
    return {
        type: CHECK,
        payload
    }
}

export const uncheckTodo = payload => {
    return {
        type: UNCHECK,
        payload
    }
}

export const inputChange = payload => {
    console.log(payload);
    return {
        type: CHANGE,
        payload
    }
}