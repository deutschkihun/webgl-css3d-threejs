import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions/actions';

const NewTodoForm = ({ todos,onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <input 
                placeholder="enter input"
                className="new-todo-input" 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
                onClick={() => {
                    if(inputValue.length === 0) {
                        alert('input value should not be empty')
                        return
                    }
                    const isDuplicatedText = todos.some(todo => todo.text === inputValue);
                    if(!isDuplicatedText) {
                        onCreatePressed(inputValue)
                        setInputValue('')
                    } else {
                        alert('duplicated todo form')
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    )
}
const mapStateToProps = state => ({
    todos: state.todos
})

// Dispatch is a function that allows our components to trigger actions that our Redux store will respond to.
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
})

// some in javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm)