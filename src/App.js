import React from 'react';
import './App.css';
import Wrapper from './component/Wrapper';
import NavBar from './component/NavBar';
import JimCarlson from './component/JimCarlson';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';
import PDFLink from './component/PdfPage';

function App() {
  return (
    <Wrapper>
      <NavBar/>
      <JimCarlson/>
      <Portfolio/>
      <Contact/>
      <PDFLink/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
