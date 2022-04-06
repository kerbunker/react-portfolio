import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';
import bkgrd from './assets/images/bkgd-image.jpg';

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
    <div className='w-screen h-screen flex flex-col justify-between'>
      <img src={bkgrd} className="absolute object-cover w-screen z-[-100] brightness-50" alt="pattern-background" />
      <header className=" pt-2">
      
        <div className='flex justify-center'>
        <h1 className='flex justify-center py-6 mx-8 mb-2 flex w-5/6 bg-indigo-500/40 border-4 border-double border-cyan-400 rounded-full shadow-md shadow-black'>
          <p className='text-blue-200 w-full justify-center items-center text-center text-4xl md:text-6xl font-semibold' >Katelyn Bunker</p>
        </h1>
        </div>
        <Nav selectedPage = {selectedPage} handlePageChange={handlePageChange} />
      </header>
      <main className='bg-black mb-auto'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
