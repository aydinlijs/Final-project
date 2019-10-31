import { CHECK, UNCHECK, ADD, CHANGE, SET_POSTS_LOADING, SET_POSTS_SUCCESS, SEARCH_CHANGE, SET_POSTS_ERROR } from "./../types";
import axios from "axios";

export const addTodo = payload => {
    return {
        type: ADD,
        payload
    };
};
export const checkTodo = payload => {
    return {
        type: CHECK,
        payload
    };
};

export const uncheckTodo = payload => {
    return {
        type: UNCHECK,
        payload
    };
};

export const inputChange = payload => {
    return {
        type: CHANGE,
        payload
    };
};

export const searchChange = payload => {
    return {
        type: SEARCH_CHANGE,
        payload
    };
};


export const fetchPosts = payload => async dispatch => {
    dispatch({ type: SET_POSTS_LOADING, payload: [] })
    try {
        await axios
            .get(`https://jsonplaceholder.typicode.com/posts?q=${payload}`)
            .then(response => {
                dispatch({ type: SET_POSTS_SUCCESS, payload: response.data });
            });
    }
    catch {
        dispatch({ type: SET_POSTS_ERROR, payload: [] })
    }
}
