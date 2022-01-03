import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import './online.css'
export const OnlineRegistration = () => {
    return (
<div>
<form className="form" >
<h3 className='z1'>Online Registration</h3><br/> 
<h5 className='z2'>Registration for category</h5>
<label htmlFor="under 17" className='z3'>Under 17</label>
<input  type="checkbox" className="z4"  name="under17" ></input>
<label htmlFor="under 19" className='z5'>Under 19</label>
<input  type="checkbox" className="z6"  name="under19" ></input>
<label htmlFor="under 23" className='z7'>Under 23</label>
<input  type="checkbox" className="z8"  name="under19"></input>
<label htmlFor="name" className='z9'>player name</label>
<input  type="text" class="form-control " className='z10' name="player name" required autoComplete='off'></input>
<label htmlFor="name" className='z11'>Father name</label>
<input  type="text" class="form-control " className='z12' name="father name" required autoComplete='off'></input>
<label htmlFor="name" className='z13'>Mother name</label>
<input  type="text" class="form-control " className='z14' name="mother name" required autoComplete='off'></input>
<label htmlFor="DOB" className='z15'>Date of Birth</label>
<input  type="date" className="z16" name="DOB"></input>
  </form>   
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
          <Link className="nav-link " to="/OnlineRegistration">Online Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Anchor">The Anchor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/TalentHunt">Talent Hunt</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Programs">Programs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Press">Press</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Gallery">Image Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/ContactUs">Contact us</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
   </div>     
        
    )
}
