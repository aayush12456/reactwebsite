import React from 'react'
import './Header.css'
import './gallery.css'
import { Link } from 'react-router-dom'
export const Gallery = () => {
    return (
        <div>
            <h3  className="g1">Image Gallery</h3> 
            <img src="https://www.mpcaonline.com/assets/uploads/slider/2020_03_11_04_20_08.jpg"class="img-thumbnail"  className="g2"/ >
            <img src="https://www.mpcaonline.com/assets/uploads/slider/2020_02_03_07_18_02.jpg" class="img-thumbnail" className="g3" />
            <img src="https://www.avantikauniversity.edu.in/images/avantikacricket/7.JPG"  class="img-thumbnail" className='g4' ></img>
            <img src="https://www.mpcaonline.com/assets/uploads/divisions/400f17f17125110743e800e630ccb779.jpg"  class="img-thumbnail" className="g5"/>
<img src="https://images.static-collegedunia.com/public/college_data/images/appImage/1490355327cover..jpg?tr=w-1286,h-193,c-force" class="img-thumbnail" className="g6" />
<img src="https://www.avantikauniversity.edu.in/images/cricketmatch/1.jpg"  class="img-thumbnail" className="g7"/>
<img src="https://www.avantikauniversity.edu.in/images/apl/3.JPG" class="img-thumbnail"  className='g8'></img>
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
