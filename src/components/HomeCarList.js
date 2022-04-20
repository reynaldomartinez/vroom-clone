import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function HomeCarList(props) {
    // console.log(props.cars)
  return (
    <div className='bg-zinc-100 overflow-auto min-h-24 max-h-36 shadow-sm rounded-sm p-6 flex flex-col'>
        <ul className='overflow-hidden'>
            {
                props.cars.map((car) => {
                    return  <Link key={car.id} to={`cars/${car.make}`} state={{x: car.make, allcars: car.model}}>
                                <li className='hover:bg-slate-300 pl-5 rounded-sm' key={car.id}><p>{car.make.charAt(0).toUpperCase() + car.make.slice(1)} {car.model}</p></li>
                            </Link>
                })
            }
        </ul>
    </div>
  )
}

export default HomeCarList;