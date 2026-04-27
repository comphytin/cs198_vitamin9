import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  useEffect(() => {
    document.title = "Your To-do List";
  }, []);
  return (
    <div className="App">
      
      <br></br>
      <h1>Your To-do List</h1>
      <br>
      </br>
      <h3>Just do what you gotta do!</h3>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
