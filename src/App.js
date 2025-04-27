import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Proposal from './components/Proposal';
import EncryptDemo from './components/EncryptDemo';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/propuesta" element={<Proposal />} />
        <Route path="/demo-cifrado" element={<EncryptDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
