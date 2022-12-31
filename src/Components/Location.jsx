import React from "react";
import '../Styles/Location.css'

function Location(){
    return(
    <div className="Location-Container">
      <iframe style={{width:"100%",height:"500px"}} id="gmap_canvas" src="https://maps.google.com/maps?q=Dundlod%20Girl's%20School&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>  
    </div>
    )
}
export default Location