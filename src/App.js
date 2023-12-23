import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './index.css'
import React, {useState} from 'react'

const App = () => {
  // state
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (!weight||!height ) {
      alert('Please enter a valid weight and height');
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));

      // Logic for message
      if (bmi < 25) {
        setMessage('You are underweight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className='container border w-25  border-white'>
        <h2 className='center'>BMI CALCULATOR</h2>
        <p style={{textAlign:"center",marginTop:"20px",color:"white"}}>Find your Body mass Index</p>
        <form onSubmit={calcBmi}>

          <div style={{marginTop:"30px",width:"280px",marginLeft:"35px"}}>
            <label>Weight (lbs)</label>
            <input  value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div style={{marginTop:"20px",width:"280px",marginLeft:"35px"}}>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>

          <div style={{marginTop:"10px"}}>
          <button className='btn' type="submit" class="btn btn-success">Submit</button>         
            <button className='btn' type="submit" class="btn btn-primary" onClick={reload}>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
