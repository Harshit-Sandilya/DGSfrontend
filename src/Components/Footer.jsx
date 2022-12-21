import "../Styles/Footer.css";
import React from "react";

export default function Footer(){
    return (
        <div className="footer">
            <div className="logo"></div>
            <div className="seprator"></div>
            <div className="quick-links">
                <div className="quick-links-head">
                    <h6 className="links-heading">Quick Links</h6>
                </div>
                <div className="links-list">
                    <a href="#" className="link">Hostel</a>
                    <a href="#" className="link">Mess Menu</a>
                    <a href="#" className="link">Location</a>
                    <a href="#" className="link">Rules and Regulations</a>
                    <a href="#" className="link">Scholarships</a>
                    <a href="#" className="link">Uniform</a>
                </div>
            </div>
            <div className="seprator"></div>
            <div className="contact-info">
                <div className="phone">
                    <div className="phone-logo"></div>
                    <div className="phone-text">+91-9314011566/01594-253561</div>
                </div>
                <div className="mail">
                    <div className="mail-logo"></div>
                    <div className="mail-text">dpsdundlod@gmail.com</div>
                </div>
            </div>
        </div>
    )
}