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

  const style = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  return (
    <div style={style}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Navigation;
