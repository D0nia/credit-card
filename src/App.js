import React from 'react';
import './App.css';

function App() {
  return (
    <div className="card">
      <div className="elements" >
          <h1>Credit Card</h1>
           <img src="https://img.icons8.com/plasticine/100/000000/sim-card-chip.png" className="chip" alt="chip"/>
          <h4 className="number-tag"> 7826  5826 9845 0258</h4>
      <div className="data">
        <h4 >5482</h4>
        <h3 ><span>Valid<br/>thru</span> 13/23</h3> 
      
        <img src="https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png" className="vip" alt="mastercardvisa"/>
      </div>
        </div> 
        <h2>Card Holder</h2>
    </div>
 
  );
}

export default App;
