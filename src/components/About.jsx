import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Line from './Line';

export default function About() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh()
    }, []);

    return (
        <div className = "about" id = "about">
            <h1 className="aboutme">About Me</h1>
            <Line />
            <div className="allinfo1">
            <div className="allinfo" data-aos="fade-up-right">
                <h1 className="name">
                <span className="nameiam">I am </span> Milad Raza</h1><br />
                <p>I am a frontend web developer. I hava more than 1 year of experience in the field of Website Designing. If you are looking for awesome Front End website at affordable price, then look no further.</p><br />
                <p><b>Full Name</b> : Muhammad Milad Raza</p>
                <p><b>Age</b> : 21 Years</p>
                <p><b>Nationality</b> : Pakistani</p>
                <p><b>City</b> : Karachi</p>
                <p><b>Freelance</b> : Available</p>
            </div>
            </div>
        </div>
    )
}
