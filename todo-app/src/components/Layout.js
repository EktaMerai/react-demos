import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent';
// import MainContent from './MainContent'

const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <div>{children}</div>
        <MainContent></MainContent>
        <Footer />
      </>
    );
  };
  
  export default Layout;