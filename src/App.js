import './App.scss';
import Button from "./components/Button";
import React, {useState} from "react";

function App() {
  const [length, setLength] = useState(0);
  const increaseLength = () => {
    setLength(length + 1);
  };
  const decreaseLength = () => {
    setLength(length - 1);
  };

  return (
    <div className="App">
      <div className='container mt-3 mb-3 text-center d-flex'>
        <div className='card bg-light m-auto style={{width: 200}} px-2 pt-2'>
          <h1
            className='text-light card border-50'
            style={{height:150, width:150, border: '2px solid #666'}}
          >
            {length}
          </h1>
          <div className='d-flex my-2'>
            <Button text="-" btnClass={"btn-lg border-10"} onClick={decreaseLength} />
            <Button text="+" btnClass={"btn-lg border-10"} onClick={increaseLength} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
