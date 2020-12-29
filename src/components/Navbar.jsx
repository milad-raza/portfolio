import React,{useState} from "react";
import { stack as Menu } from "react-burger-menu";
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import myPic from '../assets/images/me.jpg';
import './Navbar.css';

export default function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  const closeit = () => {
    setMenuOpen(false)
  }

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)
  }

  return (
    <div>
    <Menu isOpen={menuOpen} onStateChange={handleStateChange} >
      <div>
        <img src ={myPic} alt="MyPic" className = "myPic" />
      </div>
      <hr />
      <Link className="menu-item" to="home" smooth={true} duration={1000} onClick={()=> closeit()} >
        Home
      </Link><hr />
      <Link className="menu-item" to="about" smooth={true} duration={1000} onClick={()=> closeit()} >
        About Me
      </Link><hr />
      <Link className="menu-item" to="services" smooth={true} duration={1000} onClick={()=> closeit()} >
        Services
      </Link><hr />
      <Link className="menu-item" to="skills" smooth={true} duration={1000} onClick={()=> closeit()} >
        Skills
      </Link><hr />
      <Link className="menu-item" to="portfolio" smooth={true} duration={1000} onClick={()=> closeit()} >
        Portfolio
      </Link><hr />
       <Link className="menu-item" to="contact" smooth={true} duration={1000} onClick={()=> closeit()} >
        Contact Me
      </Link><hr />
      <div className="icons">
        <a href="https://www.facebook.com/milad.raza.bhatti/"
          rel="noreferrer" target="_blank" >
        <FaFacebook size = "26px" />
        </a>
        <a href="https://www.instagram.com/milad.raza.bhatti/"
          rel="noreferrer" target="_blank" >
        <FaInstagram size = "26px"/>
        </a>
        <a href="http://wa.me/923139290181/"
          rel="noreferrer" target="_blank" >
        <FaWhatsapp size = "26px" />
        </a>
        <a href="http://github.com/milad-raza/"
          rel="noreferrer" target="_blank" >
        <FaGithub size="26px" />
        </a>
        <a href="https://www.linkedin.com/in/milad-raza-23b021161/"
          rel="noreferrer" target="_blank" >
        <FaLinkedin size = "26px" />
        </a>
      </div>
      </Menu>
      </div>
  );
};

