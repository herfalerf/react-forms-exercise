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
      {/* <Box color="red" height="50px" width="75px" />
      <Box color="blue" height="50px" width="75px" /> */}
      <NewBoxForm addBox={addBox} />
      {colorBox.map((box) => (
        <Box
          color={box.color}
          height={box.height}
          width={box.width}
          id={box.id}
          key={box.id}
        />
      ))}
    </div>
  );
};

export default BoxList;
