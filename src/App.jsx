import React from 'react'
import Home from './Pages/Home/Home'
import CurOption from './Pages/Curri&Cocurri/OptionScreen'
import RegOption from './Pages/Registration/RegistrationOption'
import StuReg from './Pages/Registration/StuReg'
import TeacherApp from './Pages/Registration/TeacherApp'
import Admission from './Pages/Admission/Admission'
import NotFound from './Pages/NotFound'
import Rules from './Pages/Rules/Rules'
import ContactUs from './Pages/Contact/ContactUs'
import AboutUs from './Pages/About/AboutUs'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/activites" element={<CurOption/>}/>
        <Route path="/joinus" element={<RegOption/>}/>
        <Route path="/studentregistration" element={<StuReg/>}/>
        <Route path="/teacherapplication" element={<TeacherApp/>}/>
        <Route path="/admissiondetails" element={<Admission/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
