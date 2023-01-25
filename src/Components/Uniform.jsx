import React from "react";
import "../Styles/Uniform.css";
import summer from "../Images/Uniform/summer.jpg";
import winter from "../Images/Uniform/winter.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JoinUs from "./JoinUs";
function Uniform(){
    return(
        <div className="Container">
            <div className="uniform-header">
                <h3>SCHOOL UNIFORM</h3>
            </div>
            <div className="uniform-mainbody">
                <div className="uniform-col-1">
                
                 
                 <div id="uniform-img-1">
                 <img className="uniform-subimg" src={summer}></img>
                    <h4>Off white blouse (half sleeve & tie collar), steel grey tunic/skirt, school tie and belt, white socks with grey line and black shoes.</h4>
                    
                    <hr/>
                    <p>Wednesday: Complete white uniform with white canvas shoes.
Saturday: House colour T-shirt with complete white uniform with white canvas shoes.
</p>
<b/>
<b/>
<p>Saturday: House colour T-shirt with complete white uniform with white canvas shoes.</p>

                 </div>
                </div>
                <div className="uniform-col-2">
               
                <div id="uniform-img-2">
                <img className="uniform-subimg" src={winter}></img>
                <h4> Steel grey skirt/tunic, off white blouse navy blue pullover (full sleeve) with V-shaped neck with school crest, Steel-grey slacks, school tie, school belt, white socks with grey line and black shoes.</h4>
                <hr/>
                <p>Wednesday: Complete white uniform (with navy blue pullover) with white canvas shoes.</p>
                
                <p>
                Saturday: House Colour T-shirt with complete white uniform (navy blue pullover) with white canvas shoes.
                </p>

                </div>
                </div>
            </div>
			
           <div className="uniform-footer-h2>"> 
		    <h1>Note:</h1>
		  
          
			 <ol>
		
                <li>Students have to wear black leather shoes (both in summer and winter) except for white uniform days. No shoes of any other colour or kind, neither slippers nor high-heel sandals are permissible. </li>
               <li>As long as the student is on the school rolls, s/he must always be in proper and complete  uniform, even during the practical exam, extra class or any other function.</li>
               <li>No student is allowed to attend any school function in or outside the school without school uniform.</li>
               <li>School crest is a must on the sweater/blazer and house T-shirt.</li> 
			         
            </ol>
			
			</div>
			<Navbar />
			<Footer />
			<JoinUs />
        </div>

    )
}
export default Uniform;
