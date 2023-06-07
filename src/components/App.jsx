import React, { useState } from "react";

function App() {
  const [headingText, setHeadingtext ] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  

function displayHeading(event){
  setHeadingtext(name);
  event.preventDefault();
}
function handleMouseOver() {
  // x.backgroundColor = "white";
  setMouseOver(true);
}

function handleMouseOut() {
  // x.backgroundColor = "white";
  setMouseOver(false);
}

function handleChange(event){
  console.log(event.target.value);
  setName(event.target.value)
}


  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit="displayHeading">
      <input onChange={handleChange} type="text" placeholder="What's your name?" value = {name}/>
      <button 
      type = "submit"
      style={ { backgroundColor : isMouseOver ? "black" : "white"}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} 
      onClick={displayHeading}> 
      Submit</button>
      </form>
      
    </div>
  );
}

export default App;
