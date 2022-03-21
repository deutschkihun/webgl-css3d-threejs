import React, {useEffect} from 'react'
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, unCompletedTodo } from '../actions/actions';
import { completeTodo } from '../actions/actions';
import { loadTodos } from '../thunk/thunk';

const TodoList = ({todos = [], onRemovePressed, isCompleted, isUnCompleted, isLoading,startLoadingTodos}) => {

    useEffect(() => {
      startLoadingTodos()
    }, []);
    
    
    const loadingMessage = <div>Loading...</div>
    const content  = (
                        <div className="list-wrapper">
                            <NewTodoForm />
                            {todos.map(todo => <TodoListItem  
                                                    todo={todo} 
                                                    onRemovePressed={onRemovePressed} 
                                                    isCompleted={isCompleted}
                                                    isUnCompleted={isUnCompleted}
                                                />)}
                        </div>)
    return isLoading ? loadingMessage : content

}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    isCompleted: text => dispatch(completeTodo(text)),
    isUnCompleted: text => dispatch(unCompletedTodo(text)),

})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)

