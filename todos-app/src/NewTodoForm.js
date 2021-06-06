import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    task: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ ...formData, id: uuid() });
    setFormData({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        name="task"
        type="text"
        value={formData.task}
        onChange={handleChange}
      />

      <button>Add a new todo</button>
    </form>
  );
};

export default NewTodoForm;
