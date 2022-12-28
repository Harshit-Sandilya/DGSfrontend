import React from "react";
import "../Styles/JoinUs.css";

export default function JoinUs(){
    const [isOver,setIsOver]=React.useState(window.matchMedia("(max-width:900px)").matches)
    function DisplayText()
    {
        if(isOver)
        return (<a className="text" href="#">Join us</a>)
        return (<p>Interested ?</p>)
    }

    return(
        <div className="join-container" onMouseEnter={()=>{setIsOver(true)}} onMouseLeave={()=>{setIsOver(false)}}>
            <div className="text"><DisplayText/></div>
        </div>
    );
}