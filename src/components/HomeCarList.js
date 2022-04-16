import React from 'react';

function HomeCarList(props) {
    // console.log(props.cars)
  return (
    <div className='bg-zinc-100 overflow-auto min-h-24 max-h-36 shadow-sm rounded-sm p-6 flex flex-col'>
        <ul className='overflow-hidden'>
            {
                props.cars.map((car) => {
                    return <li key={car.id}><p>{car.make} {car.model}</p></li>
                })
            }
        </ul>
    </div>
  )
}

export default HomeCarList;