import React from 'react';
import { useParams } from 'react-router-dom';
import '../pages/Car.css';

function Car(props) {
  let {id}  = useParams();
  let index = props.car.findIndex(e => {
    console.log(e);
    console.log(e.id);
    console.log(id);
    return e.id === parseInt(id);
  });

  let car = props.car[index];
  
  return (
    <React.Fragment>
      <div className='carImageWrapper p-2.5 mx-auto w-full'>
        <img src={car.image} className='car-image  mx-auto  w-full' alt={ `${car.make} ${car.model}`} />
      </div>
      <div className='car-detail px-2.5 shadow-sm rounded-md'>
          <h2>Car Details:</h2>
          <div className='model-price flex justify-between'>
            <p>{`${car.year} ${car.make} ${car.model}`}</p>
            <h1>{`$${car.price.toLocaleString('us')}`}</h1>
          </div>
      </div>

      <div className='extra-details px-2.5 py-10'>
        <hr />
        <p>Transmission: {`${car.transmission}`}</p>
        <hr />
        <p>Engine Cylinders: {`${car.engine}`}</p>
        <hr />
        <p>Vehicle Type: {`${car.type}`}</p>
        <hr />
      </div>

    </React.Fragment>
  )
}

export default Car