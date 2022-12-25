import "../../Styles/StuReg.css";
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function StuReg(){
    const [formData,setFormData]=React.useState("");
    return(
        <div>
            <div className="reg-container">
                <div className="form-container">
                    <h1 className="form-head">Student Registration</h1>
                    <div className="form-body">
                        <div className="row1">
                            <div className="name">
                                <input 
                                    className="text-input"
                                    name="fullname"
                                    placeholder="Full Name"
                                    type="text"
                                >
                                </input>
                            </div>
                            <div className="class">
                                <label htmlFor="class" className="labels">Class</label>
                                <select 
                                    className="class-input"
                                    name="class"
                                >
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                    <option value="VI">VI</option>
                                    <option value="VII">VII</option>
                                    <option value="VIII">VIII</option>
                                </select>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="father-name">
                                <input 
                                    className="text-input"
                                    name="fathername"
                                    placeholder="Father's Name"
                                    type="text"
                                >
                                </input>
                            </div>
                            <div className="mother-name">
                                <input 
                                    className="text-input"
                                    name="mothername"
                                    placeholder="Mother's Name"
                                    type="text"
                                >
                                </input>
                            </div>
                        </div>
                        <div className="row3">
                            <div className="dob">
                                <label htmlFor="dob" className="labels">Date of Birth</label>
                                <input 
                                    className="text-input"
                                    name="dob"
                                    placeholder="dd/mm/yyyy"
                                    type="text"
                                >
                                </input>
                            </div>
                            <div className="phone-number">
                                <label htmlFor="phone" className="labels">Phone Number</label>
                                <input 
                                    className="text-input"
                                    name="phone"
                                    placeholder="+91XXXXXXXXXX"
                                    type="text"
                                >
                                </input>
                            </div>
                        </div>
                        <div className="row4">
                            <div className="check">
                                <input 
                                    className="check-input"
                                    name="whatsapp"
                                    defaultChecked={true}
                                    type="checkbox"
                                >
                                </input>
                                <h6 className="check-text">This is also my WhatsApp number</h6>
                            </div>
                            <div className="whatsapp-number">
                                <label htmlFor="whatsapp" className="labels">WhatsApp Number</label>
                                <input 
                                    className="text-input"
                                    name="whatsapp"
                                    placeholder="+91XXXXXXXXXX"
                                    type="text"
                                >
                                </input>
                            </div>
                        </div>
                        <div className="row5">
                            <label className="labels" htmlFor="address">Address</label>
                            <textarea className="address" name="address"></textarea>
                        </div>
                        <div className="row6">
                            <button className="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Navbar/>
        </div>
    )
}