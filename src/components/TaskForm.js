import { useState } from 'react';
import './TaskForm.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';

// Create an input form for adding new tasks.
// Use useState to manage the input field's content.
// Dispatch an action to the Redux store when a new task is submitted.

function TaskForm() {

    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!task.trim()) return;
        dispatch(addTodo({id: Date.now(), text: task, completed: false}));
        setTask("");
    }

    return <div>
        <label>
            Add Task:
        </label>
        <br />
        <input 
        id="name_text_box" 
        type="text" 
        name="task"
        value = {task} 
        placeholder='Ex: Make your bed'
        onChange = {(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
        <br />
        <br />
    </div>
}

export default TaskForm;