import React from 'react'
import image1 from '../../Images/Curri&Cocurri/updown.png'

function SidebarCoCurri() {
  return (
    <div className='sidebar-curri'>
      <div className='sidebar-section'>
        <div className='sidebar-header'>
          <div className='sidebar-title'>Curricular Activities</div>
            <img className='updown'src={image1} ></img>
        </div>
        <div className='sidebar-points'>
          <a className='point co' href='#Sports'>Sports</a>
          <a className='point co' href='#Indoor'>Indoor Sports Complex</a>
          <a className='point co' href='#Cultural'>Cultural & Literary</a>
          <a className='point co' href='#Auditorium'>School Auditorium</a>
          <a className='point co' href='#Music'> Music</a>
          <a className='point co' href='#Art'>Art & Craft</a>
          <a className='point co' href='#Personality'>Personality Development</a>
          <a className='point co' href='#Clubs'>Clubs</a>
         
          
        </div>
      </div>
    </div>
  )
}

export default SidebarCoCurri