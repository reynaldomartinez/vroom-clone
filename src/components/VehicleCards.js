import React, { Suspense } from 'react';
import AnimatedCard from './AnimatedCard';
import './VehicleCards.css';

function VehicleCards(props) {
  return (
      <div className='car-card'>
        <img src={props.cars.image} className='carViewList' alt={props.cars.model} />
        <div className='card-text'>
          <h2>{props.cars.year} {props.cars.make.charAt(0).toUpperCase()}{props.cars.make.slice(1)}</h2>
          <p>{props.cars.model}</p>
          <h1>${props.cars.price.toLocaleString("en-US") }</h1>
        </div>
      </div>
  )
}

export default VehicleCards;