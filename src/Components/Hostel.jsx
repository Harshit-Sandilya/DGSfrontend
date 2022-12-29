import React from 'react'
import hostel1 from '../Images/Hostel/hostel1.jpg';
import hostel2 from '../Images/Hostel/hostel3.jpg';
import hostel3 from '../Images/Hostel/hostel2.jpg';
import hostel4 from '../Images/Hostel/hostel4.jpg';

import '../Styles/Hostel.css';
function Hostel() {
  return (
    <div className='Hostel'>
      <div className='Hostel-upper'>
        <div className='Hostel-upper-left'>
          <h3>HOSTEL</h3>
          <br/>
          <p>Lorem ipsum dolor, sit amet consectetur
             adipisicing elit. Dolores reiciendis incidunt 
             eaque non temporibus aspernatur omnis adipisci,
              saepe dignissimos provident a aliquid perferendis
               aut impedit id fuga, tenetur consequatur officia.</p>
         
        </div>
        <div className='Hostel-upper-right'>
          <img src={hostel1} className="hostel1-img"></img>
        </div>
        </div>  
        <div className='Mid-line'>

        </div>
     <div className='Hostel-footer'>
      <div className='Hostel-mid-1'>
        <div className='Hostel-mid-1-left'>
          <img src={hostel2} className="hostel2-img"></img>
        </div>
        <div className='Hostel-mid-1-right'>

        </div>
      </div>
      <div className='Hostel-mid-2'>
        <div className='Hostel-mid-2-left'>

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
          
    </div>
      </div>
      <div className='Hostel-mid-4'>
        <div className='Hostel-mid-4-left'>

        </div>
        <div className='Hostel-mid-4-right'>
          <img src={hostel1} className="hostel5-img"></img>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hostel