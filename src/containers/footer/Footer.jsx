import React from 'react';
import './footer.css';
import logo from '../../assets/svg/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title gradient__text">
          Do you want to step into the future before others?
        </h2>
        <button className="footer__btn">Request Early Access</button>
        <div className="footer__contacts">
          <div className="footer__location">
            <img src={logo} alt="logo" className="footer__img" />
            <a href="#">
              Crechterwoord K12 182 DK Alknjkcb
              <br />
              All Rights Reserved
            </a>
          </div>
          <div className="footer__links">
            <h5>Links</h5>
            <ul>
              <li>
                <a href="#">Overons</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Counters</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__company">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__get-in-touch">
            <h5>Get in touch</h5>
            <ul>
              <li>
                <a href="#">
                  Crechterwoord K12
                  <br />
                  182 DK Alknjkcb
                </a>
              </li>
              <li>
                <a href="tel:085-132567">085-132567</a>
              </li>
              <li>
                <a href="mailto:info@payme.net">info@payme.net</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__copyright">© 2023 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
