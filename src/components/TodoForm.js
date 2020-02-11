import React, { useState } from "react";
import "./TodoForm.scss";

const TodoForm = props => {
  // { todoList: [], setTodoList: () => {} }
  const [todo, setTodo] = useState("");

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleClick = event => {
    // Agregar el todo
    props.addTodo(todo);
    setTodo("");
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="todo-input"
        onChange={handleChange}
        value={todo}
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
};

export default TodoForm;
