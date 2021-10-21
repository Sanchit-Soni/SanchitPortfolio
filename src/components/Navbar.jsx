import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
// import Logo from '../images/LOGO.jpg'
import '../CSS/navbar.css' 

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (

           <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/home" className="nav-logo">
           Sanchit
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Explore
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Work Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

    )
}

export default Navbar
