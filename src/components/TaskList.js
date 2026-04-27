import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TaskList.css';
import { deleteTodo } from '../store';
// Display the list of tasks from the Redux store.
// Add a delete button for each task that dispatches an action to remove the specific task.
// Use useSelector to access the tasks in the Refux store, and useDispatch to send delete actions.

function TaskList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id || Date.now() + Math.random()} className="each_task">
                        {todo.text || todo}  {/* Shows todo.text if object, or todo if string */}
                        <button 
                            className="delete_button" 
                            onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                            Delete Task
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;