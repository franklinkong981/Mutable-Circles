import React, {useState} from "react";
import Circle from "./Circle.jsx";
import ColorButtons from "./ColorButtons.jsx";

const ColoredCircles = () => {
  const [circles, setCircles] = useState(['indigo', 'peachpuff', 'lavender']);
  const addCircle = (color) => {
    setCircles(colors => [...colors, color]);
  };

  return (
    <div>
      <ColorButtons addCircle={addCircle} options={["peachpuff", "lightsteelblue", "paleturquoise"]}/>
      {circles.map((color, idx) => (
        <Circle color={color} idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default ColoredCircles;