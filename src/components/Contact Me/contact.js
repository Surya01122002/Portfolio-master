import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaHackerrank
} from "react-icons/fa";
import { Row } from 'react-bootstrap';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_y1kba6h", "template_7ro3zho", e.target, "eyTJfjOZhSwlTX8dq")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h1 className="project-h1" style={{ marginTop: "100px" }}>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contact-left">
              <div className="contact-left-inner">
                <div className="contact-links">
                  <h2>MY SOCIAL NETWORK</h2>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/Surya01122002"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons">
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.hackerrank.com/profile/Surya20021201"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaHackerrank />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://twitter.com/SuryaPitchaiyan"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/surya--p/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.instagram.com/sur_ya.01/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.facebook.com/surya.vaduvur/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <AiFillFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="home">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#E8EAF6" points="42,39 6,39 6,23 24,6 42,23"></polygon><g fill="#C5CAE9"><polygon points="39,21 34,16 34,9 39,9"></polygon><rect x="6" y="39" width="36" height="5"></rect></g><polygon fill="#B71C1C" points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"></polygon><rect x="18" y="28" fill="#D84315" width="12" height="16"></rect><rect x="21" y="17" fill="#01579B" width="6" height="6"></rect><path fill="#FF8A65" d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path></svg>
                  <div>
                    <h4 style={{ textAlign: 'left' }}>Address</h4>
                    <p>Thiruvarur, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="phone">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#37474F" d="M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"></path><path fill="#BBDEFB" d="M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"></path><rect x="21" y="40" fill="#78909C" width="6" height="2"></rect></svg>
                  <div>
                    <h4 style={{ textAlign: 'left' }}>Phone</h4>
                    <a href="tel:+917604991102">+91 7604991102</a>
                  </div>
                </div>
                <div className="mail">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path></svg>
                  <div>
                    <h4 style={{ textAlign: 'left' }}>E-Mail</h4>
                    <a href="mailto:surya01122002@gmail.com">surya01122002@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="contact-right" id="contact-me">
              <h2 >CONTACT ME</h2>
              <form autoComplete="false" id="c_form" onSubmit={sendEmail} style={{ textAlign: 'left' }}>
                <div className="form_control">
                  <label htmlFor="name">
                    Full Name
                    <span className="warning">*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="form_control">
                  <label htmlFor="email">
                    Email
                    <span className="warning">*</span>
                  </label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="form_control">
                  <label htmlFor="phone">
                    Phone Number
                    <span className="warning">*</span>
                  </label>
                  <input type="tel" name="phone" id="phone" required />
                </div>
                <div className="form_control">
                  <label htmlFor="message">
                    Message
                    <span className="warning">*</span>
                  </label>
                  <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <span>
                    Send
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z"></path></svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}