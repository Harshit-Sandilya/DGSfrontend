import React from 'react'
import hostel1 from '../Images/Hostel/hostel1.jpg';
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
    </div>
  )
}

export default Hostel