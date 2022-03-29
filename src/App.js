import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedPage, setSelectedPage] = useState('About');

  const renderPage = () => {
    if (selectedPage === 'About') {
      return <About />
    }
    if (selectedPage === "Portfolio") {
      return <Portfolio />;
    }
    if (selectedPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = page => setSelectedPage(page);

  return (
    <div className='w-screen'>
      <header className='bg-gradient-to-r from-cyan-500 to-indigo-400 pt-2 '>
        <div className='flex justify-center'>
        <h1 className='flex justify-center py-6 mx-8 mb-2 flex w-5/6 bg-indigo-500/40 border-4 border-double border-cyan-400 rounded-full shadow-md shadow-black'>
          <a className='text-blue-800 w-full justify-center items-center text-center text-4xl md:text-6xl font-semibold' href="/" >Katelyn Bunker</a>
        </h1>
        </div>
        <Nav selectedPage = {selectedPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
