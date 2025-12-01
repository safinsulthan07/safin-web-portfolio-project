import React from 'react';
import '../src/App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Footer from './components/footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'Home' && <Home />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Feedback' && <Feedback />}
      <Footer />
    </div>
  );
}

export default App;
