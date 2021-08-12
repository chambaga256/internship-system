import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css";

const Banner = ()=>{
    return (
        <div className="banner">
              <div className="banner__carousel">
                <Carousel
                 autoPlay
                 infiniteLoop
                 showIndicators={false}
                 showStatus={false}
                 showThumbs={false}
                 interval={5000}
                >
                  <div>
                  <img loading="lazy"
                  className="bannerHome__Image"
                   src="https://image.shutterstock.com/image-photo/my-heart-bubbles-sky-sunsetlove-260nw-221010295.jpg"></img>
                  </div>
                  <div>
                  <img loading="lazy"
                  className="bannerHome__Image"
                      src="https://images.pexels.com/photos/1051744/pexels-photo-1051744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      />
                    
                  </div>
                  <div>
                    <img
                     loading="lazy"
                     className="bannerHome__Image"
                     src="https://images.pexels.com/photos/6205759/pexels-photo-6205759.jpeg?aysrgb&dpr=1&w=500"
                    />
                  </div>

                  </Carousel>

              </div>

        </div>
    )
}

export default Banner;

{
    /* */
}