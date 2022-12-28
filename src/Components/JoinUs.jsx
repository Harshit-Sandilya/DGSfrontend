import React from "react";
import { Link } from "react-router-dom";
import "../Styles/JoinUs.css";

export default function JoinUs(){
    const [isOver,setIsOver]=React.useState(window.matchMedia("(max-width:900px)").matches)
    function DisplayText()
    {
        if(isOver)
        return (<Link className="text" to="/joinus">Join us</Link>)
        return (<p>Interested ?</p>)
    }

    return(
        <div className="join-container" onMouseEnter={()=>{setIsOver(true)}} onMouseLeave={()=>{setIsOver(false)}}>
            <div className="text"><DisplayText/></div>
        </div>
    );
}