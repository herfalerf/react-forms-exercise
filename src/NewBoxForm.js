import React, { useState } from "react";

const NewBoxForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`check out state -> ${formData}`);
  };

  const [formData, setFormData] = useState({
    color: "",
    width: "",
    height: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add a new box</button>
    </form>
  );
};

export default NewBoxForm;
