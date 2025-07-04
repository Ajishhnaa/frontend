import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Product from './components/Product'
import Payment from './components/Payment'
import Fees from './components/Fees'
import Admin from './components/Admin'
import Productmgmt from './components/Productmgmt'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path ='/home' element = {<Home/>}/>
        <Route path ='/register' element = {<Register/>}/>
        <Route path ='/products' element = {<Product/>}/>
        <Route path ='/payment' element = {<Payment/>}/>
        <Route path ='/fees' element = {<Fees/>}/>
        <Route path ='/admin' element = {<Admin/>}/>
        <Route path ='/productmgmt' element = {<Productmgmt/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
