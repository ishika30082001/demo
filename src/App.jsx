import React from 'react';
import "./App.css";
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import ShopDetail from './components/ShopDetail';
import Contact from './components/Contact';
import 'animate.css';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
      <Header/>      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path='/shopDetail' element={<ShopDetail/>} />
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
