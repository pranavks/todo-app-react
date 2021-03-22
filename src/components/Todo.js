import React from 'react';

const Todo = ({todo, todos, setTodos}) => {

    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completeHandler = () =>  {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {...item, completed: ! item.completed}
            }
            return item;
        }))
    }

    return(
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <button className="complete-btn " onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <li className="todo-item">{todo.text}</li>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash "></i>
            </button>
        </div>
    );
}

export default Todo;