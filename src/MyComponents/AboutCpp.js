import React from 'react'
import "./Header.css"
import "./AboutCpp.css"
import {Link} from "react-router-dom"
export const AboutCpp = () => {
    return (
        <div>
              
          <h2 className='b1'>About CPP</h2>
          <h3 className="b2">Runners For Victory is an MPCA based cricket organization with a vision to use cricket as a medium to change the lives of children from Madhya Pradesh.</h3>
          <h4  className='b3'>Runners For Victory will set up centres in city and towns of MP to give underprivilged children an opportunity to grow not only as cricketers but also as young adults. its an opportunity that they are dreaming of.Runners For Victory understands that at such an age children requires sports to help shape their lives.At Runners For Victory we want to use cricket to teach these children important life skills such as leadership,team-work,social etiquette and healthy living.  </h4>
          <img className='b4' src="https://i.guim.co.uk/img/media/5b4590f6b3866163a6065d249b426eed1115555e/0_214_2200_1321/master/2200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=c66ad999aca22ca26e001feccb634f5b"/>
          <h4  className="b5">ICC has declared World Cricket Day on 24<sup>th</sup>April in the Birthday of the God Of Cricket Sachin Tendulkar  </h4>
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
