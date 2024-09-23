import './App.scss';
import Button from "./components/Button";
import React, {useState} from "react";

function App() {
  const [altitude, setAltitude] = useState(0);
  const increaseAltitude = () => {
    setAltitude(altitude + 1);
  };
  const decreaseAltitude = () => {
    setAltitude(altitude - 1);
  };

  return (
    <div className="App">
      <div className='container mt-3 mb-3 text-center d-flex vertical-center'>
        <section className='inline-block'>
          <div className='m-3'>
            <h1 className='fs-xl'>Altitude controller</h1>
          </div>
          <div className='card bg-light m-auto style={{width: 200}} px-2 pt-2'>
            <h1
              className={`text-light fs-lg card border-50 ${altitude > 0 ? 'bg-danger' : 'bg-info'}`}
              style={{height:150, width:150, border: '2px solid #666'}}
            >
              {altitude} m
            </h1>
            <div className='d-flex my-2'>
              <Button text="-" btnClass={"btn-lg border-10"} onClick={decreaseAltitude} />
              <Button text="+" btnClass={"btn-lg border-10"} onClick={increaseAltitude} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
