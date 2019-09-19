import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, TITLE_CHANGED } from './Types'
import Axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com/todos";
const todoLimit = `limit=10`;

//create
export const addTodo = todo => dispatch => {
    Axios.post(`${baseUrl}`, todo)
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

//retrieve
export const getTodos = () => dispatch => {
    Axios.get(`${baseUrl}?_${todoLimit}`)
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

//update
export const editTodo = todo => dispatch => {
    console.log(todo)
    Axios.put(`${baseUrl}/${todo.id}`, todo)
        .then(res => dispatch({
            type: EDIT_TODO,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

//delete
export const deleteTodo = todo => dispatch => {
    Axios.delete(`${baseUrl}/${todo.id}`)
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: todo.id
        }))
        .catch(err => console.log(err))
}

export const titleChanged = (title) => {
    return {
        type: TITLE_CHANGED,
        payload: title
    }
}
