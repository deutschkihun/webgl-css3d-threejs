import React from 'react'

const TodoListItem = ({todo, onRemovePressed, isCompleted,isUnCompleted}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ?          <button 
                    onClick={() => isUnCompleted(todo.text)}
                    className="completed-button">
                Mark as  uncompleted
                </button> : 
                <button 
                    onClick={() => isCompleted(todo.text)}
                    className="completed-button">
                Mark as Completed
                </button>
            }
           
            <button 
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
)

export default TodoListItem 