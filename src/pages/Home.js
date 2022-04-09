import React from 'react';
import SearchBar from '../components/SearchBar';
import homeFrontCar from '../assets/download.png';
import truck from '../assets/truck-mobile.webp';
import suv from '../assets/suv-mobile.png';
import sedan from '../assets/sedan-mobile.webp';

import './Home.css';

function Home() {
  return (
    <div className='content '>
        <div className='vehicleSearch flex flex-wrap bg-white'>
            <div className='left-content pl-10 pt-10'>
                <h1>buy your next ride entirely online</h1>
                <p>Shop, buy, and get it delivered right to y0our doorstep. </p>
            </div>
            <div className='right-content '>
                <img src={homeFrontCar} alt='2021 Subaru Wrx Sti' className=' max-w-none	' /> 
            </div>
            <SearchBar />
        </div>

        <div className='vehicle-type-wrapper bg-white text-center'>
            <h2>shop by vehicle type</h2>
            <div className='vehicle-type '>
                <a href="/" className='hover:text-red-500'>
                    <img src={truck} alt="type: truck" className='h-36 ' />
                    <span>Shop Trucks</span>
                </a>

                <a href="/" className='hover:text-red-500'>
                    <img src={suv} alt="type: suv" />
                    <span>Shop SUVsd</span>
                </a>
                <a href="/" className='hover:text-red-500'>
                    <img src={sedan} alt="type:sedan" />
                    <span>Shop Sedans</span>
                </a>
            </div>
        </div>
{/* High Quality, Buying Made Easy, Delivered Right to You */}
        <div className="shop-vehicles-wrapper">
            <div className='hqt p-2'>
                <img src={truck} alt="high quality trucks" className='hqt-img rounded-full' />
                <div className='hq-text '>
                    <h2 className='pl-2'>High-Quality Cars</h2>
                    <p class="mt-4 px-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        Multiple inspections. Free CARFAX® history report. Free limited warranty.    
                    </p>
                </div>
            </div>
            <div className='bme p-2'>
                <img src={suv} alt="buying made easy" className='hqt-img rounded-full' />
                <div className='bme-text'>
                    <h2>Buying Made Easy</h2>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                        No haggling. No hassles. An easy and efficient car buying process— the way it should be.  
                    </p>
                </div>
            </div>
            <div className='drty p-2'>
                <img src={sedan} alt="delivered right to you" className='hqt-img rounded-full' />
                <div className='drty-text'>
                    <h2>Delivered Right to You</h2>
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                       Get your car or truck shipped to your home or a convenient nearby location.
                    </p>
                </div>
            </div>
            
        </div>
        <button class="flex-none buy-now-btn w-1/2 h-12 uppercase font-medium tracking-wider bg-red-600 text-white ml-2.5 my-6" type="submit">
                Buy now
            </button>
            

        <div className='vroom-values p-8'>
            <h1 className='pl-24 text-2xl'>vroom values</h1>
                <div className='vroom-wrapper'>
                    <div className='section1 p-10 bg-slate-50'>
                        <h2>No haggling.No pressure.</h2>
                        <p className='font-thin'>We’ve eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</p>
                    </div>
                    <div className='section2 p-10 bg-slate-50'>
                        <h2>No haggling.No pressure.</h2>
                        <p className='font-thin'>We’ve eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</p>
                    </div>
                    <div className='section3 p-10 bg-slate-50 '>
                        <h2>No haggling.No pressure.</h2>
                        <p className='font-thin'>We’ve eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</p>
                    </div>
                    <div className='section4 p-10 bg-slate-50'>
                        <h2>No haggling.No pressure.</h2>
                        <p className='font-thin'>We’ve eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.</p>
                    </div>
            </div>
        </div>

        <div className='brands bg-zinc-100 pt-10'>
            <h1 className='pl-7 text-center'>shop popular brands</h1>
            <div className='brand-list flex flex-wrap py-4'>
                <a href="/" className='p-2'>
                    <div className='tesla rounded-sm hover:shadow-md text-center'>
                        Tesla
                    </div>
                </a>
                <a href="/" className='p-2'>
                <div className='Jeep rounded-sm hover:shadow-md text-center'>
                    Jeep
                </div>
                </a>
                <a href="/" className='p-2'>
                    <div className='Toyota rounded-sm hover:shadow-md text-center'>
                        Toyota    
                    </div>
                </a>
                <a href="/" className='p-2'>
                    <div className='Honda rounded-sm hover:shadow-md text-center'>
                        Honda
                    </div>
                </a>
                <a href="/" className='p-2'>
                    <div className='Audi rounded-sm hover:shadow-md text-center'>
                        Audi
                    </div>
                </a>
                <a href="/" className='p-2'>
                    <div className='Bmw rounded-sm hover:shadow-md text-center'>
                        Bmw
                    </div>
                </a>
            </div>
        </div>
    
    </div>
  )
}

export default Home;