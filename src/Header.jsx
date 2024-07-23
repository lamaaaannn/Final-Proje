import "./Header.css"
import Navbar from "./Navbar.jsx"
function Header() {
    return( <div className="header">
    {/* <div className='navbar'>

      <div className='navRight'>
      <img src="./images/DevAcademy.png" alt="" srcset="" />
      </div>
       <div className='navLeft'>
<ul>
<li><a href="./Home.jsx">Home</a></li>
<li><a href="./ServiceCard.jsx">Our Services</a></li>
<li><a href="">Projects</a></li>
<li><a href="">Blog</a></li>
<li><a href="">About</a></li>
</ul>
<button>Contact</button>
<img className="menu" src="./images/menu.svg" alt="" />

      </div>

    </div> */}
   
    <div className='headerCenter'>
      <h1>We Build Digital Product For Your Success</h1>
      <div className='headerBtns'>
      <button>Get Started</button>
      <button>Watch Demo</button>
      </div>
     
    </div>
    <div className='image'></div>
    
  
  </div>)
}
export default Header