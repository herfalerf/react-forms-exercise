import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    color: "",
    width: "",
    height: "",
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
    addBox({ ...formData, id: uuid() });
    setFormData({ color: "", width: "", height: "" });
    console.log(`check out state -> ${formData}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        type="text"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        type="number"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="number"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add a new box</button>
    </form>
  );
};

export default NewBoxForm;
