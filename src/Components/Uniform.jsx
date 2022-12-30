import React from "react";
import '../Styles/Uniform.css'
import summer from "../Images/Uniform/summer.jpg"
import winter from "../Images/Uniform/winter.jpg"
function Uniform(){
    return(
        <div className="Container">
            <div className="header">
                <h3>SCHOOL UNIFORM</h3>
            </div>
            <div className="mainbody">
                <div className="col-1">
                
                 
                 <div id="img-1">
                 <img className="img1" src={summer}></img>
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
                <div className="col-2">
               
                <div id="img-2">
                <img className="img1" src={winter}></img>
                <h4> Steel grey skirt/tunic, off white blouse navy blue pullover (full sleeve) with V-shaped neck with school crest, Steel-grey slacks, school tie, school belt, white socks with grey line and black shoes.</h4>
                <hr/>
                <p>Wednesday: Complete white uniform (with navy blue pullover) with white canvas shoes.</p>
                
                <p>
                Saturday: House Colour T-shirt with complete white uniform (navy blue pullover) with white canvas shoes.
                </p>

                </div>
                </div>
            </div>
            <h2>Note:</h2>
            <ol>
                <li>Students have to wear black leather shoes (both in summer and winter) except for white uniform days. No shoes of any other colour or kind, neither slippers nor high-heel sandals are permissible. </li>
               <li>As long as the student is on the school rolls, s/he must always be in proper and complete  uniform, even during the practical exam, extra class or any other function.</li>
               <li>No student is allowed to attend any school function in or outside the school without school uniform.</li>
               <li>School crest is a must on the sweater/blazer and house T-shirt.</li>           
            </ol>
        </div>
    )
}
export default Uniform;