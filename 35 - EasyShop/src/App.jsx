import { useState } from 'react'

import viteLogo from '/vite.svg'

import Header from './components/navbar/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Loginsignup from './pages/Loginsignup';
import men_banner from '../public/Assets/banner_mens.webp';
import women_banner from '../public/Assets/banner_women.webp';
import kid_banner from '../public/Assets/banner_kids.webp';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ='/' element={<Shop/>}/>
      <Route path ='/men' element={<ShopCategory banner ={men_banner} category ="men"/>}/>
      <Route path ='/women' element={<ShopCategory banner={women_banner} category ="women"/>}/>
      <Route path ='/kids' element={<ShopCategory banner={kid_banner} category ="kid"/>}/>
      <Route path ='/Product' element={<Product/>}>
      <Route path =':ProductId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element ={<Loginsignup/>}/>
    </Routes>
    </BrowserRouter>
  
       </>
  )
}

export default App
