import React from 'react'
import Carosuelf from './Carousel'
import Flight from './Flights'
import {  Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import AlertsCarousel from './alertscarousel';
import Footericons from './Footericons';
const Home = () => {

  return (<>
    <Carosuelf></Carosuelf>

    <br></br>
    <Container>
        <Flight></Flight>
    </Container>
    <br></br>
    <br></br>
    <Container>
    <Container fluid className='text style3d'>
        <Row>
          <Col md={4} className="text-section">
            <h2>Why choose Us</h2>
            <p>
              When you book a flight with IndiGo, you fly on-time, every time, daily, and non-stop. Get the lowest booking and cancellation fee, exclusive offers, add-ons and in-flight services that make your journey hassle-free. Now, you can download the app and travel on the go, with IndiGo.
            </p>
          </Col>
          <Col md={4} className="text-section">
            <h2>India and abroad</h2>
            <p>
              Choose from over 80+ domestic, and 30+ international destinations when you book with IndiGo. Enjoy the 6E experience when you fly across the world with our 7 codeshare partners - from France to Australia, and beyond. Book your preferred flight on our website and let us fly you across India and the world.
            </p>
          </Col>
          <Col md={4} className="text-section">
            <h2>The complete 6E experience</h2>
            <p>
              With IndiGo, you fly hassle-free, from beginning to end, when you pre-book our 6E Services. From priority check-in and anytime boarding, to complimentary snacks and doorstep baggage delivery – you can personalise your journey, every step of the way, when you say ‘Let’s IndiGo’.
            </p>
          </Col>
        </Row>
      </Container>
      </Container>
      <br></br>
      <br></br>
      <AlertsCarousel></AlertsCarousel>
      <br></br>
      <br></br>
      <Footericons></Footericons>
      <br></br>
  
</>
  )
}

export default Home