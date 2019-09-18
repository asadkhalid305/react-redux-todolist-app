import { GET_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, TITLE_CHANGED } from '../actions/Types'

const initialState = {
    items: [],
    item: {},
    title: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                item: action.payload
            }
        case GET_TODOS:
            return {
                ...state,
                items: action.payload
            }
        case EDIT_TODO:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                item: action.payload
            }

        case TITLE_CHANGED:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
}
