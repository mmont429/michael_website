import React, { Component } from "react";
import { Link } from "react-scroll";
import "../../App.scss";

export default class Navbar extends Component {
    render(){
        return(
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">
                    <Link 
                        activeClass="active"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Welcome
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                            Get in touch
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}