import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
    

function App() {
  return (
    <div>
      <h1>Pili's Portfolio!!</h1>
      <h4>Hi!! I'm happy toshare my portfolio with you!!</h4>
      <p>Please feel free to browse through this app to learn more about my work and other interests.</p>
      
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </div>
  );
}
    
export default App;