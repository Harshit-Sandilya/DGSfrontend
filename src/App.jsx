import React from "react";
import Home from "./Pages/Home/Home";
import CurOption from "./Pages/Curri&Cocurri/OptionScreen";
import RegOption from "./Pages/Registration/RegistrationOption";
import StuReg from "./Pages/Registration/StuReg";
import TeacherApp from "./Pages/Registration/TeacherApp";
import Admission from "./Pages/Admission/Admission";
import NotFound from "./Pages/NotFound";
import Rules from "./Pages/Rules/Rules";
import ContactUs from "./Pages/Contact/ContactUs";
import AboutUs from "./Pages/About/AboutUs";
import Curri from "./Pages/Curri&Cocurri/Curri";
import Cocurri from "./Pages/Curri&Cocurri/cocurri";
// import Hostel from "./Components/Hostel";
import Scholarship from "./Pages/Scholarships/Scholarships";
// import Location from "./Components/Location";
// import Calender from "./Components/Calender";
// import Uniform from "./Components/Uniform";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/activites" element={<CurOption />} />
				<Route path="/joinus" element={<RegOption />} />
				<Route path="/studentregistration" element={<StuReg />} />
				<Route path="/teacherapplication" element={<TeacherApp />} />
				<Route path="/admissiondetails" element={<Admission />} />
				<Route path="/rules" element={<Rules />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/curriculum" element={<Curri />} />
				<Route path="/cocurri" element={<Cocurri />} />
				{/* <Route path="/hostel" element={<Hostel />}></Route> */}
				<Route path="/scholarship" element={<Scholarship />} />
				{/* <Route path="/location" element={<Location />}></Route> */}
				{/* <Route path="/calender" element={<Calender />}></Route> */}
				{/* <Route path="/uniform" element={<Uniform />}></Route> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
