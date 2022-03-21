import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO, UNCOMPLETED_TODO, LOAD_TOTOS_IN_PROGRESS, LOAD_TOTOS_SUCCESS,LOAD_TOTOS_FAILURE } from "./types"
export const createTodo = text => (
    {
        type:CREATE_TODO,
        payload:{text}
    }
)

export const removeTodo = text => (
    {
        type:REMOVE_TODO,
        payload:{text}
    }
)

export const completeTodo = text => (
    {
        type:COMPLETE_TODO,
        payload:{text}
    }
)

export const unCompletedTodo = text => (
    {
        type: UNCOMPLETED_TODO,
        payload: {text}
    }
)

export const loadTodosInProgress = () => (
    {
        type: LOAD_TOTOS_IN_PROGRESS
    }
)

export const loadTodosSuccess = () => (
    {
        type: LOAD_TOTOS_SUCCESS
    }
)

export const loadTodosFailure = () => (
    {
        type: LOAD_TOTOS_FAILURE
    }
)


