import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Hostel from './Components/Hostel';
import Scholarship from './Components/Scholarship';
import Location from './Components/Location';
import Calender from './Components/Calender';
function App() {
  return (
    
    <BrowserRouter>
     
    <Navbar />
     
        <Routes>

          
          
          <Route path="/hostel" element={<Hostel />}>

          </Route>
          <Route path="/scholarship" element={<Scholarship />}>
            
          </Route>
          <Route path="/location" element={<Location />}>
            
          </Route>
          <Route path="/calender" element={<Calender />}>
            
            </Route>

          
         </Routes>
    
      <Footer/>
      </BrowserRouter>
      
  
  )
}

export default App
