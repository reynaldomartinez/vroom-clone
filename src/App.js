import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  const carList = useSelector((state) => state.cars.value);

  return (
    <div className="App bg-zinc-100">
      <Navbar />

      <Home />

      <div>
        {/* <ul>
          {carList.map((cars) => {
            return <li key={cars.id}>{cars.make}</li>
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default App;
