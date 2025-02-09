import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyWork from './components/MyWork';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
    

function App() {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className='esquinas'>
        <img src="/deco-plantas.png" alt="decoración con plantas" className='decoPlantas-1' />
        <img src="/deco-plantas.png" alt="decoración con plantas" className='decoPlantas-2' />
      </div>
{/*       <Routes>
        <Route path="/MyWork" element={<MyWork />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Home/>
      <MyWork/>
      <Skills/>
    </div>
  );
}
    
export default App;