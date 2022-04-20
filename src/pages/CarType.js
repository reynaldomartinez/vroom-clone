import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams, Link } from 'react-router-dom';
import VehicleCards from '../components/VehicleCards';

function CarType() {
  let {make} = useParams();
  const cars = useSelector((state) => state.cars.value);
  // const location = useLocation();

  let x = cars.filter((x) => {
      return x.make.includes(make);
    })

  useEffect(() => {
  })

  return (
    <div>
      <ul>
        {
          x.map((car) => {
          return <li key={car.id}>
                  <Link to={`/cars/${car.id}/${car.make}`} car={car}>
                    <VehicleCards cars={car} />   
                  </Link>
                 </li>
          })
        }
      </ul>
    </div>
  )
}

export default CarType;