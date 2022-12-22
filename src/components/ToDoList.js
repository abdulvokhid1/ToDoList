import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDo todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default ToDoList;
