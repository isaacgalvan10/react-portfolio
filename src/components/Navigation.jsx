import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Navigation;
