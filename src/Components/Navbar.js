import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    render(){
        return(
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link 
                        activeClass="actove"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">About you</li>
                    <li className="nav-item">About us</li>
                </ul>
            </div>
        </nav>
        );
    }
}