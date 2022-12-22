import "../Styles/Navbar.css";
import React from "react";

export default function Navbar(props){
    const [open,setOpen]=React.useState(false);
    function handleLogin(){
        alert("Coming soon....");
    }
    function handleMenu(){
        let x = window.matchMedia("(max-width: 900px)")
        let styling = document.getElementById("menu-list").style;
        if(x.matches)
        {
            styling.display=open?"none":"flex"
            setOpen(prev=>!prev);
        }
    }

    return (
        <div className="nav">
            <div className="menu">
                <a href="#">
                    <div className="menu-icon" onClick={handleMenu}></div>
                </a>
            </div>
            <div className="logo"></div>
            <div className="login">
                <button className="login-btn" onClick={handleLogin}>
                    <div className="btn-icon"></div>
                    <a className="btn-txt" href="#">Login</a>
                </button>
            </div>
            <div className="pages" id="menu-list">
                <a href={props.page=="Home"?null:"#"} className={props.page=="Home"?"active":"page-links"}>Home</a>
                <a href={props.page=="About"?null:"#"} className={props.page=="About"?"active":"page-links"}>About us</a>
                <a href={props.page=="Academics"?null:"#"} className={props.page=="Academics"?"active":"page-links"}>Academics</a>
                <a href={props.page=="Admission"?null:"#"} className={props.page=="Admission"?"active":"page-links"}>Admission</a>
                <a href={props.page=="Calender"?null:"#"} className={props.page=="Calender"?"active":"page-links"}>Calender</a>
                <a href={props.page=="Gallery"?null:"#"} className={props.page=="Gallery"?"active":"page-links"}>Gallery</a>
                <a href={props.page=="Contact"?null:"#"} className={props.page=="Contact"?"active":"page-links"}>Contact us</a>
            </div>
        </div>
    )
}