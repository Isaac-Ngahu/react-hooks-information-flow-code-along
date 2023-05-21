import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor,color }) {
  // console.log(onChangeColor)
function handleClick(){
  const justARandomColor=getRandomColor();
  onChangeColor(justARandomColor)
  console.log(color)
}
  return <div className="child" style={{ backgroundColor: color }} onClick={handleClick}/>;
}

export default Child;
