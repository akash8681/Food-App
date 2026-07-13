import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from '../src/components/Header/Header.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import Menupage from './components/Menupage/Menupage.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Aboutpage from './components/Aboutpage/Aboutpage.jsx';
import Bookpage from './components/Bookpage/Booktable.jsx';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/Home' element={<Homepage/>} />
        <Route path='/Menu' element={<Menupage/>} />
        <Route path='/About' element={<Aboutpage/>} />
        <Route path='/Book' element={<Bookpage/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
