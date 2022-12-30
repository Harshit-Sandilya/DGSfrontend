import React from 'react'
import image1 from '../../Images/Curri&Cocurri/updown.png'

function SidebarCurri() {
  return (
    <div className='sidebar-curri'>
      <div className='sidebar-section'>
        <div className='sidebar-header'>
          <div className='sidebar-title'>pedagogical structure</div>
            <img className='updown'src={image1} ></img>
        </div>
        <div className='sidebar-points'>
          <a className='point' href='#Preparatory'>Preparatory Stage</a>
          <a className='point' href='#Middle'>Middle Stage</a>
        </div>
      </div>
      <div className='sidebar-section'>
        <div className='sidebar-header'>
          <div className='sidebar-title'>Curricular Activities</div>
            <img className='updown'src={image1} ></img>
        </div>
        <div className='sidebar-points'>
          <a className='point' href='#Teaching'>Teaching Methodology</a>
          <a className='point' href='#Smart'>Smart Class</a>
          <a className='point' href='#Projector'>Projector room</a>
          <a className='point' href='#Science'>science and maths lab</a>
          <a className='point' href='#Computer'> Computer lab</a>
          <a className='point' href='#Step'>step and learn</a>
          <a className='point' href='#Cubetto'>cubetto</a>
          <a className='point' href='#Robogarden'>robo garden</a>
          <a className='point' href='#Staff'> Teaching staff</a>
          
        </div>
      </div>
    </div>
  )
}

export default SidebarCurri