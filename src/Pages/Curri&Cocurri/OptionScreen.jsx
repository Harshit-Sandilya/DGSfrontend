import "../../Styles/RegOption.css";
import "../../Styles/CurrOption.css";
import React from "React";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import arrowBack from "../../Images/Registration/arrow_back_FILL0_wght400_GRAD0_opsz48.png";
import arrowFront from "../../Images/Registration/arrow_forward_FILL0_wght400_GRAD0_opsz48.png";

export default function RegOption(){
    const [onStu,setOnStu]=React.useState(window.matchMedia("(max-width:900px)").matches);
    const [onTea,setOnTea]=React.useState(window.matchMedia("(max-width:900px)").matches);    
    return (
        <div>
            <div className="option-container">
                <div className="stu-reg" onMouseEnter={()=>{setOnStu(true)}} onMouseLeave={()=>{setOnStu(false)}}>
                    {onStu && <a href="#" className="cover-link">
                        <div className="cover">
                            <div className="cover-text">Curriculum</div>
                            <div className="cover-arrow">
                                <img src={arrowBack}></img>
                            </div>
                        </div>
                    </a>}
                </div>
                <div className="teacher-app" onMouseEnter={()=>{setOnTea(true)}} onMouseLeave={()=>{setOnTea(false)}}>
                    {onTea && <a href="#" className="cover-link">
                        <div className="cover">
                            <div className="cover-text">Co-Curriculur</div>
                            <div className="cover-arrow">
                                <img src={arrowFront}></img>
                            </div>
                        </div>
                    </a>}
                </div>
            </div>
            <Navbar/>
            <Footer/>
        </div>
    )
}