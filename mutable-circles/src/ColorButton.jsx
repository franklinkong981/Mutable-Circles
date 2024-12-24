import React from "react";
import "./ColorButton.css";

const ColorButton = ({color, addCircle}) => {
  return (
    <button onClick={() => addCircle(color)} className="ColorButton-btn" style={{backgroundColor: color}}>
      {color}
    </button>
  );  
};  

export default ColorButton;