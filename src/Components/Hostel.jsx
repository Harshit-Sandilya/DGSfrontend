import React from 'react'
import hostel1 from '../Images/Hostel/hostel1.jpg';
import hostel2 from '../Images/Hostel/hostel3.jpg';
import hostel3 from '../Images/Hostel/hostel2.jpg';
import hostel4 from '../Images/Hostel/hostel4.jpg';

import '../Styles/Hostel.css';
function Hostel() {
  return (
    <div className='Hostel'>
     
        
          <h3>HOSTEL</h3>
          
          
          <div className='Hostel-upper'>
          <div className='Hostel-upper-left'>
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
        <div className='Hostel-Mid-line'>

        </div>
     <div className='Hostel-footer'>
      <div className='Hostel-mid-1'>
        <div className='Hostel-mid-1-left'>
          <img src={hostel2} className="hostel2-img"></img>
        </div>
        <div className='Hostel-mid-1-right'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis iusto magnam vitae nam harum officiis? Quisquam earum at illo iste, quis minima. Velit magni sed dolorum debitis quae fugit facere.</p>
        </div>
      </div>
      <div className='Hostel-mid-2'>
        <div className='Hostel-mid-2-left'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti reiciendis id cupiditate saepe repudiandae doloribus distinctio quos, iste asperiores enim necessitatibus eveniet sed at. Est quidem eum earum tenetur.</p>
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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur quo aliquid dolorem harum repellat cupiditate nobis modi mollitia eaque expedita, vel exercitationem atque officia laudantium laboriosam voluptatibus voluptatum dolores.</p>  
    </div>
      </div>
      <div className='Hostel-mid-4'>
        <div className='Hostel-mid-4-left'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum libero suscipit natus, cumque veritatis quae odio hic recusandae illo fugiat nam quia tempore voluptatum cupiditate iusto a similique id.</p>
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