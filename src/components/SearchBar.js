import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='vehicle-search p-10'>
      <form className='mt-4'>
        <label className='inline-flex'>
        
          <input type="text" placeholder='Search by make model, or body type' className="mt-1 block px-3 py-2 bg-white border border-slate-200 text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50  disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
          <button class="h-10 px-6 mt-1 font-semibold border border-slate-200 bg-red-600 text-white" type="button">
            Search
          </button>
        </label>
      </form>
    </div>
  )
}

export default SearchBar;