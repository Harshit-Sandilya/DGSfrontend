import "../Styles/Navbar.css";
import React from "react";

export default function Navbar(props){
    function handleLogin(){
        alert("Coming soon....");
    }
    return (
        <div className="nav">
            <div className="major">
                <div className="logo"></div>
            <div className="pages">
                <a href="#" className={props.page=="Home"?"active":"page-links"}>Home</a>
                <a href="#" className={props.page=="About"?"active":"page-links"}>About us</a>
                <a href="#" className={props.page=="Academics"?"active":"page-links"}>Academics</a>
                <a href="#" className={props.page=="Admission"?"active":"page-links"}>Admission</a>
                <a href="#" className={props.page=="Calender"?"active":"page-links"}>Calender</a>
                <a href="#" className={props.page=="Gallery"?"active":"page-links"}>Gallery</a>
                <a href="#" className={props.page=="Contact"?"active":"page-links"}>Contact us</a>
            </div>
            </div>
            <div className="login">
                <button className="login-btn" onClick={handleLogin}>
                    <div className="btn-icon"></div>
                    <a className="btn-txt" href="#">Login</a>
                </button>
            </div>
        </div>
    )
}