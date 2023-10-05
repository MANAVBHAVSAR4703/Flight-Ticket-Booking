import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './footer.css'; // Import your custom CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Row>
          <Col xs={12} md={6} lg={3} className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Offers</li>
              <li>Careers</li>
              <li>Advertise with us</li>
              <li>Sitemap</li>
              <li>Destinations</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3} className="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About us</li>
              <li>IndiGo Green – ESG report</li>
              <li>IndiGoReach - Our CSR initiatives</li>
              <li>Hello 6E Magazine</li>
              <li>Board of Directors</li>
              <li>Leadership Team</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3} className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Plan B</li>
              <li>Special/Disability Assistance</li>
              <li>Medical Assistance</li>
              <li>Seat Select</li>
              <li>Gift Voucher</li>
              <li>6E Eats</li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3} className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>Terms and Conditions</li>
              <li>Conditions of Carriage</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>International Travel Tips</li>
              <li>Web check-in Advisory</li>
              <li>Tariff Sheet</li>
              <li>Purchase Requirement</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="footer-bottom">
            <p>Ⓒ Copyright 2023 IndiGo. All rights reserved.</p>
          </Col>
        </Row>
        </div>
    </footer>
  );
}

export default Footer;
