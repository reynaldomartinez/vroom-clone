import React, { useState, Suspense } from 'react'
import './Buy.css';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import AnimatedCard from '../components/AnimatedCard';
import { Link } from 'react-router-dom';
import FilterCars from '../components/FilterCars';

function Buy() {
  const cars = useSelector((state) => state.cars.value);
  const filteredMake = useSelector(state => state.cars.filterMakeOnly);

  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 4;
  const pagesVisited = pageNumber * carsPerPage;
  const displayCars = cars.slice(pagesVisited, pagesVisited + carsPerPage);
  const makeCars = filteredMake.slice(pagesVisited, pagesVisited + carsPerPage);
  const pageCount = Math.ceil(cars.length / carsPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }
  // .1sec Delay to make fallback visible
  const VehicleCards = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(import('../components/VehicleCards.js'))
      }, 1000)
    })
  }) 
  // const VehicleCards = React.lazy(() => {
  //   return import('../components/VehicleCards');
  // })

  return (
    <section>
      <div className='cars-wrapper'>      
        <FilterCars id='filter' />
          {
            filteredMake.length > 0 ? 
              (makeCars.map((car) =>
                (<Suspense key={car.id} fallback={<AnimatedCard />}>
                              <Link to={`/cars/${car.id}/${car.make}`} key={car.id} car={car}>
                                <VehicleCards key={car.id} cars={car} />
                              </Link>
                            </Suspense>)
              ))
              : displayCars.map((car) => {
              return car ? (<Suspense key={car.id} fallback={<AnimatedCard />}>
                              <Link to={`/cars/${car.id}/${car.make}`} key={car.id} car={car}>
                                <VehicleCards key={car.id} cars={car} />
                              </Link>
                            </Suspense>) : (
                              <h1>No vehicles available</h1>
                            )
            })
          }
        <ReactPaginate 
          nextLabel={">"}
          onPageChange={changePage}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
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
      {/* <AnimatedCard /> */}
    </section>
  )
}
export default Buy;