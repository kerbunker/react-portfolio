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
    if (selectedPage === "portfolio") {
      return <Portfolio />;
    }
    if (selectedPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = page => setSelectedPage(page);

  return (
    <div>
      <header>
        <h1>
          <a href="/">Bunker</a></h1>
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
