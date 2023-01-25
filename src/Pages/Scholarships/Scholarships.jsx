import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import JoinUs from "../../Components/JoinUs";
import "../../Styles/Scholarships.css";

export default function Scholarships(){
    const [onA1,setA1]=React.useState(window.matchMedia("(max-width:900px)").matches);
    const [onA2,setA2]=React.useState(window.matchMedia("(max-width:900px)").matches);

    return(
        <div>
            <div className="award-container">
                <div className="award-head">Awards and Scholarships</div>
                <div className="award-body">
                    <div className="award-tile">
                        <div className="tile-cover" onMouseEnter={()=>{setA1(true)}} onMouseLeave={()=>{setA1(false)}}>
                            <div className={`tile-head-${onA1 ? "show" : "hide"}`}>Best Student Award</div>
                            <div className={`tile-content-${onA1 ? "show" : "hide"}`}>The Prizes & certificates will be given away to the students for obtaining the highest percentage in their respective class groups</div>
                            <div className={`tile-content-${onA1 ? "show" : "hide"}`}>Classes III to V</div>
                            <div className={`tile-content-${onA1 ? "show" : "hide"}`}>Classes VI to VIII</div>
                        </div>
                    </div>
                    <div className="award-tile" onMouseEnter={()=>{setA2(true)}} onMouseLeave={()=>{setA2(false)}}>
                        <div className="tile-cover">
                            <div className={`tile-head-${onA2 ? "show" : "hide"}`}>Miss Regularity Award</div>
                            <div className={`tile-content-${onA2 ? "show" : "hide"}`}>The Prizes & certificates will be given away to the students for 100% attendance in each academic year</div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
            <Footer/>
            <JoinUs/>
        </div>
    )
}