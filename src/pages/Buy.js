import React, { useState } from 'react'
import './Buy.css';
import { useSelector } from 'react-redux';
import VehicleCards from '../components/VehicleCards';
import ReactPaginate from 'react-paginate';

function Buy() {
  const cars = useSelector((state) => state.cars.value);
  // const [carsPerPage, setCarsPerPage] = useState(cars.slice(0,4));
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 4;
  const pagesVisited = pageNumber * carsPerPage;
  const displayCars = cars.slice(pagesVisited, pagesVisited + carsPerPage);
  const pageCount = Math.ceil(cars.length / carsPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <section>
      <div className='cars-wrapper'>
        {
          displayCars.map((car) => {
            console.log(car)
            return car && <VehicleCards key={car.id} cars={car} />
          })
        }

        {
          (cars.length <= 0) && <h1>No vehicles available</h1>
        }

        <ReactPaginate 
          nextLabel={"next >"}
          onPageChange={changePage}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          disabledClassName={"disabledBtn"}
        />

      </div>
    </section>
  )
}

export default Buy;
