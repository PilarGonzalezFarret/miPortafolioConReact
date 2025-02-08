import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckOutMyWork from './components/CheckOutMyWork';
import Home from './components/Home';
import Navbar from './components/Navbar';
    

function App() {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className='esquinas'>
        <img src="/deco-plantas.png" alt="decoración con plantas" className='decoPlantas-1' />
        <img src="/deco-plantas.png" alt="decoración con plantas" className='decoPlantas-2' />
      </div>
      <Routes>
        <Route path="/CheckOutMyWork" element={<CheckOutMyWork />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}
    
export default App;