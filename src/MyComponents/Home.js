import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import './home.css'
export const Home = () => {
   
    return (
        <>
        
            <div>
           
            <img src="https://gumlet.assettype.com/freepressjournal/import/2016/11/cricket-match.jpg?w=1200&h=750" className="winimg"/>
            <img src="https://schoolbook.getmyuni.com/assets/images/rev_img/76160__27475/152637800920180515152257.jpeg" className="playimg" />
            <img src="https://gumlet.assettype.com/freepressjournal%2Fimport%2F2014%2F06%2FJune-06_P3_MIT.jpg?w=400&dpr=2.6" className="shakeimg" />
            <h2  className="a1">Welcome to Runners For Victory</h2>
            <h3 className="a2" >Runners For Victory has been formed with a vision to make cricket in MP to reach the fartest corners of MP</h3><br></br>
            <b><h4 className="a3">Altough various states of india  individually represent the game of cricket it has to reach untapped in india there is no dearth of talent . MP has also a lot of talent but in our MP the rate of  expansion of cricket has very slow due to lack of availablity of cricket grounds and clubs in the cities and towns .due to this lack of availability our growth rate in field of cricket has very low.</h4><br/></b>
            <b><h4  className="a4">our objective has to find a talented players across each  cities and towns and to help them to reach national or international level  and also  contribute to build a strong Indian Cricket Team.</h4><br/></b>
            <b><h4  className="a5">with that in mind Runners For Victory has been formed. How different would be performance point from others ?. <p/></h4></b>
            <b><h4  className="a6">At Runners For Victory a player will earn points and those points will decide how well he achieves success.That way his performance alone will be the criteria.</h4></b>
            <b><h4  className="a7">Runners For Victory will spot the talent of india's next generation and give it platform.</h4></b>
                  
          </div>
             
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
    

        
        </>
    )
}
