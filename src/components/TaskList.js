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

    const handleDelete = () => {
        dispatch(deleteTodo(todos.id));
    }

    return <div>
       <ul>
        {todos.map((t, i) => (
            <li key={i} className="each_task">{t} 
            <button className="delete_button" onClick={handleDelete}>Delete Task</button></li>
        ))}
       </ul>
    </div>
}

export default TaskList;