import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'

function App() {
  const [count, setCount] = useState(0);
  const [headerColor, setHeaderColor] = useState("#000"); // Default color for h1

  const handleButtonClick = (increment, backgroundColor) => {
    setCount(prevCount => prevCount + increment);
    setHeaderColor(backgroundColor); // Change h1 color based on button click
  };

  const handleReset = () => {
    setCount(0);
    
   
  };

  return (
    <div>
      <h1 style={{ color: headerColor }}>{count}</h1>
      <Button text="+2" onClick={() => handleButtonClick(2, "#05062d")} style={{ backgroundColor: "#05062d", color: "red" }} />
      <Button text="+3" onClick={() => handleButtonClick(3, "orange")} style={{ backgroundColor: "orange", color: "" }} />
      <Button text="+5" onClick={() => handleButtonClick(5, "green")} style={{ backgroundColor: "green", color: "orange" }} />
      <Button text="+8" onClick={() => handleButtonClick(8, "black")} style={{ backgroundColor: "black", color: "blue" }} />
      <Button text="+19" onClick={() => handleButtonClick(19, "#3f160e")} style={{ backgroundColor: "#3f160e", color: "#fff" }} />
      <Button text="Reset" onClick={handleReset} style={{ backgroundColor: "gray", color: "white" }} />
    </div>
  );
}

export default App;