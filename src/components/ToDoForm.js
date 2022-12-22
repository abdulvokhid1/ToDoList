import React, { useState } from "react";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        className="todo-input"
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default ToDoForm;
