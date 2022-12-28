import "../Styles/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-logo"></div>
            <div className="seprator"></div>
            <div className="quick-links">
                <div className="quick-links-head">
                    <h6 className="links-heading">Quick Links</h6>
                </div>
                <div className="links-list">
                    <Link to="#" className="link">Hostel</Link>
                    <Link to="#" className="link">Mess Menu</Link>
                    <Link to="#" className="link">Location</Link>
                    <Link to="#" className="link">Rules and Regulations</Link>
                    <Link to="#" className="link">Scholarships</Link>
                    <Link to="#" className="link">Uniform</Link>
                </div>
            </div>
            <div className="vertical-sep"></div>
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