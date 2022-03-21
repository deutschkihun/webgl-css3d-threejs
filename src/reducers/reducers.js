import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO, UNCOMPLETED_TODO, LOAD_TOTOS_SUCCESS,LOAD_TOTOS_IN_PROGRESS,LOAD_TOTOS_FAILURE } from "../actions/types";

export const todos = (state = [],action) => {
    const {type, payload } = action

    switch (type) {
        case CREATE_TODO:
            const newTodo = {
                text: payload.text,
                isCompleted:false
            }
            return state.concat(newTodo)
    
        case REMOVE_TODO:
            return state.filter(todo => todo.text !== payload.text)

        case COMPLETE_TODO:
            return state.map(todo => {
                if(todo.text == payload.text) {
                    return { ...todo, isCompleted:true}
                }
            })
        
        case UNCOMPLETED_TODO: 
            return state.map(todo => {
                if(todo.text == payload.text) {
                    return {...todo, isCompleted:false}
                }
            })
            
        default:
            return state
    }
}

export const isLoading = (state = false, action) => {
    const {type} = action
    switch (type) {
        case LOAD_TOTOS_IN_PROGRESS:
            return true
            
        case LOAD_TOTOS_SUCCESS:
        case LOAD_TOTOS_FAILURE:
            return false
    
        default:
            return state;
    }
}