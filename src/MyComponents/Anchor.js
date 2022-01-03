import React from 'react'
import './Header.css'
import './Anchor.css'
import { Link } from 'react-router-dom'
export const Anchor = () => {
    return (
        <div>
            <h2  className="d1">About the anchor</h2>
        <img src="https://hi-static.z-dn.net/files/d03/c71034bf22bf33afa3697e53974dec25.jpg"  className="d2"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6pAZ5fFWwapA1Yto8NiR23-uUpVAhR0D7aQ&usqp=CAU" className="d3" />
        <h4 className ="d4">Aman Mehra was born in Tarana,a small village in Madhya Pradesh.life in a village is full of hardships,scarcity of water,electricity and transportation to name a few. Kids from villages have to face challenge everyday.Little Aman loved to play cricket.in fact,it was cricket that made him forget his hardships and made him tough.</h4>
        <h5  className="d5">While in school just like the other kids his age,he too was inspired by some great indian players.But leave alone suitable playing conditions.Basic needs such as cricketing gear was not available. Most important,Aman didn<sup>,</sup>t have opportunities to play outside his own district.In comparison,Kids from towns and cities were better equipped and they had bigger chances to showcase their talent.  </h5>
        <h4  className="d6">I didn't want kids from villages to suffer the way I had to. Along with Sujit Kumar sharma my childhood friend and a good cricketer himself,Runners For Victory was formed. I've been playing cricket since 2009 and in year 2012, I had planned to start an academy of cricket for underprivileged Kids. I feel happy that finally my dream is coming true'.</h4>
        <h5  className="d7">That is what Sujit Kumar Sherma, our coordinator has to say... </h5>
        <h4   className="d8">'I have been playing cricket for more than 20 years As a young boy of 22, after playing on the district level, I went to Mumbai with a dream to play for India. However, after struggling to find a place in a team, I had to return due to lack of Opportunity. That moment I decided that other talented children must not meet the same fate as me'.</h4>
        <h5  className="d9">The selection of a player will depend upon his performance points. The more points he gets, the more opportunities he will get. We will take the selected players to various cities of MP where they will get to play with some renowed cricketing clubs. Not only that, players will given a stipend.</h5>
        <h4  className="d10" >'We will our commitment and make sure kids from villages will get complete support, encouragement and opportunities'.</h4>
        <h5 className="d11" >(Aman Mehra)</h5>
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
