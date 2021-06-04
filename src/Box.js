import React from "react";

const Box = (props) => {
  return (
    <div
      className="box"
      style={{
        backgroundColor: props.color,
        width: `${props.width}em`,
        height: `${props.height}em`,
      }}
    ></div>
  );
};

// function Box({
//   id,
//   handleRemove,
//   width = 5,
//   height = 5,
//   backgroundColor = "blue",
// }) {
//   //   const remove = () => handleRemove(id);
//   return (
//     <div>
//       <div
//         style={{
//           height: `${height}em`,
//           width: `${width}em`,
//           backgroundColor,
//         }}
//       />
//       {/* <button onClick={remove}>Remove The Box!</button> */}
//     </div>
//   );
// }

export default Box;
