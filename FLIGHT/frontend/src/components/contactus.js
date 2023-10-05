import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './contactus.css'; // Import your custom CSS for styling
import FlightChatbot from './chatbot';
import imagefooter from '../cimages/Footer-Contact-Us.avif'
import './contact-section.css'
function ContactUs() {
  return (<>
      <Container>
        <h1 align='center'>Contact Us</h1>
        <br></br>
        <Row className='justify-content-center'>
          <Col md={6} className='style3d'>
            <ListGroup>
            <ListGroupItem variant='dark'>
            <h2>Registered Office</h2>
            </ListGroupItem>
            <ListGroupItem>
            <address>
              CIN : L62100DL2004PLC129768
              <br />
              Upper Ground Floor, Thapar House, Gate No. 2, Western Wing,
              <br />
              124 Janpath, New Delhi - 110001 India.
              <br />
              Fax : +91 11-43513200
            </address>
            <p>
              For comments, concerning Civil Aviation Requirement, Section -3,
              please contact- Air Transport, Series M, Part IV.
            </p>
            <p>
              Nodal Officer, Isha Gandhi at{' '}
              <a href="/">nodalofficer@goindigo.in</a>
            </p>
            <p>
              Appellate Authority, Amrita Gill at{' '}
              <a href="/">appellateauthority@goindigo.in</a>
            </p></ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={6} className='style3d'>
          <ListGroup>
            <ListGroupItem variant='dark'>
            <h2>Corporate Office</h2>
            </ListGroupItem>
            <ListGroupItem>
            <address>
              Level 1, Tower C, Global Business Park,
              <br />
              Mehrauli-Gurgaon Road, Gurgaon - 122 002, Haryana, India.
              <br />
              Tel : +91 (0)124 435 2500
              <br />
              Fax : +91 (0)124 406 8536
            </address>
            </ListGroupItem>
          </ListGroup>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col className='style3d'>
          <ListGroup>
          <ListGroupItem variant='dark'>
            <h2>Customer Support</h2>
            </ListGroupItem>
            <ListGroupItem>
            <p>
              India :{' '}
              <a href="/">0124-6173838</a>,{' '}
              <a href="/">0124-4973838</a>
            </p>
            <p>
              *Calls may be recorded for training and quality purposes and for
              compliance with applicable regulatory requirements.{' '}
              <a href="/">Click here</a> to know more about IndiGo privacy
              policy.
            </p>
            </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <img src={imagefooter} className='mx-auto d-block' width={'100%'} alt=""></img>
      <Container>
        <hr></hr>
    <Row className="contact-section">
      <Col md={4} className="contact-item" style={{paddingLeft:'100px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
        <h3>Call Us</h3>
        <p>We're just a ring away.</p>
        <a href="tel:+0123456789">View Number</a>
      </Col>

      <Col md={4} className="contact-item" style={{paddingLeft:'100px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
</svg>
        <h3>Feedback</h3>
        <p>Have a compliment or complaint?</p>
        <a href="/">Leave Feedback</a>
      </Col>

      <Col md={4} className="contact-item" style={{paddingLeft:'100px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"/>
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
        <h3>Chat with Us</h3>
        <p>Questions? We are here to help.</p>
        <a href="/">Start Chat</a>
      </Col>
    </Row>
    <hr></hr>
    </Container>
   
      <FlightChatbot></FlightChatbot>
    </>
  );
}

export default ContactUs;
