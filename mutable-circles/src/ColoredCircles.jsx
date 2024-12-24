import React, {useState} from "react";
import Circle from "./Circle.jsx";

const ColoredCircles = () => {
  const [circles, setCircles] = useState(['indigo', 'peachpuff', 'lavender']);
  const addCircle = newColor => {
    setColors(colors => [...colors, newColor]);
  };
  
  return (
    <div>
      {circles.map((color, idx) => (
        <Circle color={color} idx={idx} />
      ))}
      <button onClick={addCircle}>ADD</button>
    </div>
  );
};

export default ColoredCircles;