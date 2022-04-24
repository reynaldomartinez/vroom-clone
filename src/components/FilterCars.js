import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCarType } from '../features/Cars';

function FilterCars() {
  const [isOpen, setIsOpen] = useState(false);

  const [isFiltered, setIsFiltered] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.value);
  const filteredMake = useSelector(state => state.cars.filterMakeOnly);
  

  const filterByMake = (e) => {
    // setIsFiltered()
    const make = e.target.value;
    return 'acura';
  }
  return (
<div>
      <button className='flex bg-slate-300 justify-start p-2 m-2 rounded-md' onClick={()=>setIsOpen(()=>!isOpen)}>
        Filter
      </button>
  <div className={isOpen ? 'inset-1 flex z-40 absolute top-28 left-0' : 'hidden'}>
    <div role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
      <div className="ml-auto z-40 relative -top-14  max-w-xs w-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
      <button className='flex bg-slate-300 justify-center p-2 w-20 m-2 text-center rounded-md' onClick={()=>setIsOpen(()=>!isOpen)}>
        X
      </button>
        <div className="px-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        </div>
        <form className="mt-4 border-t border-gray-200">
          <h3 className="sr-only">Categories</h3>
          <ul role="list" className="font-medium text-gray-900 px-2 py-3">
            <li>
              <Link className="block px-2 py-3" to='/'>
                HOME
              </Link>
            </li>
          </ul>
          <div className="border-t border-gray-200 px-4 py-6">
            <h3 className="-mx-2 -my-3 flow-root">
              <button type="button" className="px-2 py-3bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                <span className="font-medium text-gray-900"> Makes </span>
                <span className="ml-6 flex items-center">
                  {/* <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg> */}
                </span>
              </button>
            </h3>
            <div className="pt-6" id="filter-section-mobile-0">
              <div className="space-y-6">
                <div className="flex items-center">
                  <input onClick={() => dispatch(filterCarType({make:'acura'}))} id="filter-mobile-color-4" name="color" value="acura" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500"> Acura </label>
                </div>

                <div className="flex items-center">
                  <input onClick={() => dispatch(filterCarType({make:'bmw'}))}  id="filter-mobile-color-0" name="color[]" value="bmw" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500"> BMW </label>
                </div>

                <div className="flex items-center">
                  <input onClick={() => dispatch(filterCarType({make:'dodge'}))}  id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500"> Dodge </label>
                </div>

                <div className="flex items-center">
                  <input onClick={() => dispatch(filterCarType({make:'ford'}))}  id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500"> Ford </label>
                </div>

                <div className="flex items-center">
                  <input onClick={() => dispatch(filterCarType({make:'hyundai'}))}  id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500"> Hyundai </label>
                </div>

                <div className="flex items-center">
                  <input onClick={() => dispatch(filterCarType({make:'jeep'}))}  id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500"> Jeep </label>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
  </div>
</div>

  )
}

export default FilterCars;