import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "test") {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task } });
  const button = todoList.getByText("Add a new todo");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function () {
  const todoList = render(<TodoList />);

  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  addTodo(todoList);

  const removeButon = todoList.getByText("X");
  expect(removeButon).toBeInTheDocument();

  expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
});

it("can remove a todo", function () {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  const removeButton = todoList.getByText("X");

  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
