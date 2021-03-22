import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!(inputText.length > 0)) return;
    setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <div className="input-wrapper">
      <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} placeholder="Add Todo"/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus"></i>
      </button>
      </div>
      <div className ="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="uncompleted">Undone</option>
        </select>
      </div>
    </form>
  );
};

export default Form;