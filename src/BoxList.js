import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [colorBox, setColorBox] = useState([]);
  const addBox = (newColorBox) => {
    setColorBox((colorBox) => [...colorBox, newColorBox]);
  };

  return (
    <div>
      <Box color="red" height="50px" width="75px" />
      <Box color="blue" height="50px" width="75px" />
      <NewBoxForm />
      {colorBox.map((color, height, width) => {
        <Box color={color} height={height} width={width} />;
      })}
    </div>
  );
};

export default BoxList;
