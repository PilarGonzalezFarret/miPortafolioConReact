import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
    

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <p>Holaaaa</p>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
    
export default App;