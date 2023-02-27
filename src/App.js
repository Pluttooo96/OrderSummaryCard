import React from 'react'
import './App.css';

function App() {

  const info = 'You can now listen to millions of songs audiobooks'+
                ' and podcasts on any device anywhere you like'

  return (
    <div className='main__box'>
      <img className='main__img' src='./illustration-hero.svg' alt='hero-art'/>
      <div className='main__info'><h1>Order Summary</h1>{info}</div>
      <div className='main__plan'>
        <img className='plan__icon' src='./icon-music.svg' alt='music-icon' />
        <div className='plan__cost'><span className='plan__cost--title'>Annual Plan</span><br/>$59.99/year</div>
        <div className='plan__change' onClick={(null)}>Change</div>
      </div>
      <div className='main__btnSection'>
        <button className='main__proceedBtn'>Proceed to Payment</button>
        <button className='main__cancelBtn'>Cancel Order</button>
      </div>
    </div>

  )
}

export default App;
