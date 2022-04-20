import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Buy from './pages/Buy';
import Car from './pages/Car';
import CarType from './pages/CarType';
import Home from './pages/Home';

function App() {
  const cars = useSelector((state) => state.cars.value)

  return (
    <div className="App bg-zinc-100">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Buy />} />
        <Route path='/cars/:make' element={<CarType />} />
        <Route path='/cars/:id/:make' element={<Car car={cars} />} />
      </Routes>
    </div>
  )
}

export default App;