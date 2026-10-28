import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ServiceDetails from './pages/ServiceDetails'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<ServiceDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
