import './App.css';
import { Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
    

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <p>Holaaaa</p>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App;