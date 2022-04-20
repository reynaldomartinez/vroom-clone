import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import HomeCarList from './HomeCarList';
import './SearchBar.css';

function SearchBar() {
  const [carList, setCarList] = useState([]);
  const cars = useSelector((state) => state.cars);

  const searchCar = (e) => {
    console.log(e.target.value);
    // console.log(cars.value[0]);
    const searchTerm = e.target.value.toLowerCase();
    const carFilter = cars.value.filter((value) => {
      return value.make.includes(searchTerm) || value.model.includes(searchTerm) || value.type.includes(searchTerm);
    });
    
    if(searchTerm === ""){
      setCarList([]);
    }else {
      setCarList(() => carFilter);
    }
  }
  return (
    <div className='vehicle-search p-10'>
      {carList.length > 0 && <HomeCarList cars={carList} />}
      <form className='mt-4'>
        <label className='inline-flex'>
          <input type="text"
              placeholder='Search by make' 
              onChange={searchCar}
              className="mt-1 block px-3 py-2 bg-white border border-slate-200 text-sm shadow-sm placeholder-slate-400
                         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                       disabled:bg-slate-50  disabled:shadow-none
                       invalid:border-pink-500 invalid:text-pink-600
                       focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
          <button className="h-10 px-6 mt-1 font-semibold border border-slate-200 bg-red-600 text-white" type="button">
            Search
          </button>
        </label>
      </form>
    </div>
  )
}

export default SearchBar;