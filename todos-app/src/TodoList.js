import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodo((todos) => [...todos, newTodo]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id != id));
  };

  const todoComponents = todos.map((todo) => (
    <Todo task={todo.task} id={todo.id} key={todo.id} handleRemove={remove} />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todoComponents}
    </div>
  );
};

export default TodoList;
