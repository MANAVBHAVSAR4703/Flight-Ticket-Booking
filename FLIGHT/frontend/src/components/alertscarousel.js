import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './alertscarousel.css'
import { Col,Container,Row} from 'react-bootstrap';

const AlertsCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items:1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 200 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  const alerts = [
    {
      id: 1,
      text: 'Important update: New safety measures are in place on all our flights.',
    },
    {
      id: 2,
      text: 'Limited-time offer: Save 20% on your next booking with IndiGo.',
    },
    {
      id: 3,
      text: 'Travel advisory: Check the latest COVID-19 guidelines before your trip.',
    },
  ];

  return (
    <Container style={{border:'5px solid grey',backgroundColor:'black',height:'30%',width:'90%'}}>
    <Row>
    <Col style={{paddingTop:'25px',paddingLeft:'10%'}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" fill="white" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg><span style={{color:'white',fontSize:'25px'}}> Alerts</span></Col>
    <Col className="alerts-carousel"  style={{width:'80%'}}>
      <Carousel 
      responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        arrows={false}
        >
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-item">
            <p style={{color:'white'}}>{alert.text}</p>
          </div>
        ))}
      </Carousel>
    </Col>
    </Row>
    </Container>
  );
};

export default AlertsCarousel;
