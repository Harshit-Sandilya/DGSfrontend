import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JoinUs from "./JoinUs";
import hostel1 from "../Images/Hostel/hostel1.jpg";
import hostel2 from "../Images/Hostel/hostel3.jpg";
import hostel3 from "../Images/Hostel/hostel2.jpg";
import hostel4 from "../Images/Hostel/hostel4.jpg";

import "../Styles/Hostel.css";
function Hostel() {
  return (
    <div className='Hostel'>
     
        
          <h3>HOSTEL</h3>
          
          
          <div className='Hostel-upper'>
			
          <div className='Hostel-upper-left'>
          <p>The hostel is centrally air-conditioned and spacious. It has been designed meticulously to fulfill the challenging requirements of the children of all age groups. It includes separate dormitories for junior students and rooms for senior students with attached washrooms. Each girl child will be provided with separate bed, study table, almirah etc. Recreational rooms are available where students can relax and enjoy leisured classes.</p>
         
               </div> 
        
        <div className='Hostel-upper-right'>
          <img src={hostel1} className="hostel1-img"></img>
        </div>
        </div>
        <div className='Hostel-Mid-line'>

        </div>
     <div className='Hostel-footer'>
      <div className='Hostel-mid-1'>
        <div className='Hostel-mid-1-left'>
          <img src={hostel2} className="hostel2-img"></img>
        </div>
        <div className='Hostel-mid-1-right'>
          <p> Pastoral Care: Here at DGS, we will provide a 'home away from home' where we will maintain traditional values in a family atmosphere and ensure physical and emotional welfare of each girl child. Every staff member of the school will be approachable. The hostel will be supervised by the trained matrons who will take care of every need of students and supervise their daily routine. We will also arrange periodic talks with the students for their queries and requirements. Students will also be given personal counselling.</p>
        </div>
      </div>
      <div className='Hostel-mid-2'>
        <div className='Hostel-mid-2-left'>
          <p>Recreation Rooms: The hostel also has well-furnished recreation rooms where students can relax, play games, watch TV, read newspapers and journals during their leisured hours.</p>
        </div>
        <div className='Hostel-mid-2-right'>
          <img src={hostel3} className="hostel3-img"></img>
        </div>
      </div>
      <div className='Hostel-mid-3'>
        <div className='Hostel-mid-3-left'>
          <img src={hostel4} className="hostel4-img"></img>
        </div>
    <div className='Hostel-mid-3-right'>
    <p>Infirmary: Here we will have our own infirmary under the charge of a qualified doctor and nurses who will be available round the clock. There will be an isolation room where any student suffering from any infectious disease will be kept to prevent spread of any infection. We will implement appropriate policies for the medical care of students. Periodical check-ups will be conducted. At the beginning of each term every child has to undergo a routine medical examination. The school is only few kilometers away from the city hospital where any emergencies can be referred.</p>  
    </div>
      </div>
      <div className='Hostel-mid-4'>
        <div className='Hostel-mid-4-left'>
          <p>Food and Nutrition: The mess is extremely hygienic and will serve a purely vegetarian diet to our students. We will feel proud in serving 100% organic food to our students. Vegetables, pulses and wheat are originally grown in our own farm which are free from pesticides and chemicals. We also own a dairy with over 100 cows which will allow students to get pure milk as well. Mess menu is designed in consultation with nutritionist. The student body will also be often consulted to bring about any changes in the menu. There will be well trained mess managers to watch on smooth functioning of mess.</p>
        </div>
        <div className='Hostel-mid-4-right'>
          <img src={hostel1} className="hostel5-img"></img>
        </div>
      </div>
     </div>
	 <Navbar />
			<Footer />
			<JoinUs />
    </div>
  )
}

export default Hostel;
