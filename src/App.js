import React, {useState, useEffect} from 'react';
import './App.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run only once when app starts
  useEffect(() => {
    loadTodosFromLocalStorage();
    console.log(localStorage.getItem('todos'));
  }, []);

  useEffect(() => {
    filterHandler();
    saveTodosToLocalStorage();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed' : setFilteredTodos(todos.filter(item => item.completed === true)); break;
      case 'uncompleted' : setFilteredTodos(todos.filter(item => item.completed === false)); break;
      default : setFilteredTodos(todos); break;
    }
  }

  // Save to LocalStorage
  const saveTodosToLocalStorage = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  // Load from LocalStorage
  const loadTodosFromLocalStorage = () => {
    if (localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }

  return (
    <>
    <h1 className="main-heading">Todo App with React</h1>
    <div className="App">
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}  />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
    </>
  );
}

export default App;
