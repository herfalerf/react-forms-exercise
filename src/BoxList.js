import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [colorBox, setColorBox] = useState([]);
  const addBox = (newColorBox) => {
    setColorBox((colorBox) => [...colorBox, newColorBox]);
  };
  const remove = (id) => {
    setColorBox((boxes) => boxes.filter((box) => box.id != id));
  };

  const boxComponents = colorBox.map((box) => (
    <Box
      backgroundColor={box.color}
      height={box.height}
      width={box.width}
      id={box.id}
      key={box.id}
      handleRemove={remove}
    />
  ));

  return (
    <div>
      {/* <Box color="red" height="50px" width="75px" />
        <Box color="blue" height="50px" width="75px" /> */}
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
};

export default BoxList;
