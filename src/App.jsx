import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Jobs from './pages/Jobs/Jobs.jsx'
import Products from './pages/Products/Products'; 
import Fallback from './pages/Fallback/Fallback.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </div>
  );
}

export default App