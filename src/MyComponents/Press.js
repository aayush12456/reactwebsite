import React from 'react'
import './Header.css'
import './press.css'
import { Link } from 'react-router-dom'
export const Press = () => {
    return (
        <div>
          <h3 className ="f1">Press</h3> 
          <img src="http://rgibhopal.com/rits/Engineering/admin/Uploads/rits_sport_covrege/dj_28_03112012_1.jpg" className='f2'></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRmvFyAAtTW6c5hmR8DIGfTh55PqCJjXrXIAFWXokpXicUFdXBW2DEjA1e3S-WWtzFL0&usqp=CAU" className='f3'></img>
          <div className='nav1'>
<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top navbar-default">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/cricket">Cricket</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/aboutcpp">About Cpp</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Anchor">The Anchor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/TalentHunt">Talent Hunt</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/Press">Press</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Gallery">Image Gallery</Link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
        </div>
    )
}
