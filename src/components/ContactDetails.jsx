import React from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactDetails() {
    return (
        <div className="contactDetails">
            <h2 className="emailphoneHead">
                <HiOutlineMail size="30px" />
                Email
            </h2>
            <a
                className="emailphoneLink"
                href="mailto:miladrazabhatti@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                Miladrazabhatti@gmail.com
            </a>
            <br />
            <br />
            <h2 className="emailphoneHead">
                <HiOutlinePhone size="30px" />
                Phone
            </h2>
            <a
                className="emailphoneLink"
                href="tel:+923139290181"
                target="_blank"
                rel="noreferrer">
                +923139290181
            </a>
            <br />
            <br />
            <div className="social">
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
        </div>
    )
}
