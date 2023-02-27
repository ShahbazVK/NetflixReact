import React, { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NavbarMenu } from './components/NavbarMenu'

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
