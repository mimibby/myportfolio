import React from 'react'
import { useState } from 'react';
import InstagramIcon from '../components/Instagram-icon.png'
import GithubIcon from '../components/Github-icon.png'
import LinkedinIcon from '../components/Linkedin-icon.png'
import FacebookIcon from '../components/Facebook-icon.png'
import TiktokIcon from '../components/Tiktok-icon.png'
import EmailIcon from '../components/Email-icon.png'
import WhatsappIcon from '../components/Whatsapp-icon.png'
import '../App.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with emailjs or backend API for form submission
    alert('Form submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>CONTACT ME</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className='email-link'>
        <p>Or email me directly</p>
        <a href="mailto:mimiagita@gmail.com" className='email-icon'>
          <img src={EmailIcon} alt="Email" /> mimiagita@gmail.com
        </a>
        </div>
      <div className="social-links">
        <a href="https://wa.me/2348160747753" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={WhatsappIcon} alt="Whatsapp" />
        </a>
        <a href="https://github.com/mimibby" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={GithubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
        <a href="https://facebook.com/miracle.agita" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={TiktokIcon} alt="Tiktok" />
        </a>
        <a href="https://instagram.com/miras_beauty_glam" target="_blank" rel="noopener noreferrer" className='social-icon'>
          <img src={InstagramIcon} alt="Instagram" className='ig-icon' />
        </a>


      </div>
    </section>
  );



  
    // <section className='contact'>
    //   <h2>Contact Me</h2>
    //   <ul className='social-links'>
    //     <li><a href="https://github.com/mimibby"target='_blank' rel='noopener noreferrer'>GitHub</a></li>
    //     <li><a href="https://linkedin.com/in//"target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
    //     <li><a href="https://facebook.com/miracle.agita"target='_blank' rel='noopener noreferrer'>Facebook</a></li>
    //     <li><a href="https://instagram.com//miras_beauty_glam"target='_blank' rel='noopener noreferrer'>Instagram</a></li>
    //   </ul>
    // </section>
  
}

export default Contact