import React from 'react'
import Home from './Pages/Home/Home'
import CurOption from './Pages/Curri&Cocurri/OptionScreen'
import RegOption from './Pages/Registration/RegistrationOption'
import StuReg from './Pages/Registration/StuReg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/activites" element={<CurOption/>}/>
        <Route path="/joinus" element={<RegOption/>}/>
        <Route path="/studentregistration" element={<StuReg/>}/>
      </Routes>
    </Router>
  )
}

export default App
