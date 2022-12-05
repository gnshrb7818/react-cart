import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import Cart from './component/Cart'
import Home from './component/Home'
import Menu from './component/Menu'
import Pnf from './component/Pnf'
import Product from './component/Product'


function App() {
  return (
    <Router>
      <Menu />
      <ToastContainer autoClose={4000} position={'top-center'} />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/product/:id`} element={<Product />} />
        <Route path={`/cart`} element={<Cart />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </Router>
  )
}

export default App