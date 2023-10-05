import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 200 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:"https://www.goindigo.in/content/dam/indigov2/6e-website/destinations/get-inspired/british-council/British-Council-LP-banner.jpg"
  },
  {
    url:"https://www.goindigo.in/content/dam/indigov2/6e-website/destinations/get-inspired/british-council/Delhi-British-Council.jpg"
          
  },
  //Second image url
  {
    url:
      "https://www.goindigo.in/content/dam/indigov2/6e-website/destinations/get-inspired/british-council/Goa.jpg"
  },
  //Third image url
  {
    url:
      "https://www.goindigo.in/content/dam/indigov2/6e-website/destinations/get-inspired/british-council/Jaipur.jpg"
  },

];
const Carosuelf = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" className="mx-auto d-block"/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Carosuelf;
