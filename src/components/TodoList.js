import React from "react";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((item, index) => {
        return (
          <li className="todo-item" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
