import './App.scss';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className='container mt-3 mb-3 text-center d-flex'>
        <div className='card bg-light m-auto style={{width: 200}} px-2 pt-2'>
          <h1
            className='text-light card border-50'
            style={{height:150, width:150, border: '2px solid #666'}}
          >
            Length
          </h1>
          <div className='d-flex my-2'>
            <Button text="-" btnClass={"btn-lg"} onClick={console.log("-")} />
            <Button text="+" btnClass={"btn-lg"} onClick={console.log("+")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
