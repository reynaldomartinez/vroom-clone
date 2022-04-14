import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Buy from './pages/Buy';
import Home from './pages/Home';

function App() {


  return (
    <div className="App bg-zinc-100">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Buy />} />
      </Routes>
    </div>
  )
}

export default App;