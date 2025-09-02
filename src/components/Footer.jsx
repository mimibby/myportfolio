import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Brand / About */}
        <div className="footer-brand">
          <h3>Miracle Chinazam Agita</h3>
          <p>Creative Web Developer passionate about building interactive, user-friendly digital experiences.</p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaEnvelope /> mimiagita@gmail.com</p>
          <p><FaWhatsapp /> +234 816 074 7753</p>
        </div>

        {/* Column 4 - Social */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="mailto:mimiagita@gmail.com" target="_blank" rel="noopener noreferrer" className="email"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/miracle-chinazam-643027380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedin /></a>
            <a href="https://github.com/mimibby" target="_blank" rel="noopener noreferrer" className="github"><FaGithub /></a>
            <a href="https://instagram.com/miras_beauty_glam" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
            <a href="https://facebook.com/miracle.agita" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebook /></a>
            <a href="https://wa.me/2348160747753" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="tiktok"><SiTiktok /></a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Miracle Chinazam Agita Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;