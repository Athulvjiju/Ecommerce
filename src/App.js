import React from 'react';
import './App.css';
import Header from './components/Headers';
import Footer from './components/Headers/Footer';
import Home from './modules/Home';
import {Routes,Route} from 'react-router-dom'
import Product from './components/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/categories/:name' element={<CategoryProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<div className='text-center '> 404 Not Found</div>}/>
        </Routes>
      <Footer/>
      </div>
  );
}

export default App;
