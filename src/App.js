import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.scss";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    const newTodoList = [todo, ...todoList];
    setTodoList(newTodoList);
  };

  return (
    <div className="container">
      <h1 className="title">todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoList} />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={TodoApp} />
    </BrowserRouter>
  );
};

export default App;
