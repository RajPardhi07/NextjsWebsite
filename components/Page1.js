"use client"
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Page1 = () => {
  var img = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(img.current, {
      opacity: .8
    })
    gsap.to(img.current, {
      scrollTrigger: {
        trigger: img.current,
        start: "0% 0%",
        scrub: 0.5,
      },
      ease: "linear",
      opacity: 0.2
    })
  },[])


  return (
    <div className="homePage1">
      <img ref={img} data-scroll data-scroll-speed="-1" className='homeImage1' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
      <div className="homeText1">
        <div className="homeText-Inner">
          <h2>Global Digital Design Studio Partnering With <br /> Brand and business thats creates exceptional <br /> experiences where people live,workand unwind.</h2>
          <h1>Digital</h1>
          <h1>Design</h1>
          <h1>Experience</h1>
          <h3>We explore and push the boundaries of digital for brands and businesses that strive to enhance people's lives through exceptional experiences lives through life , Start with a click.</h3>
          <div className="homeText-Inner2">
            <div><h5 className="underline mt-7">The Studio</h5></div>
            <div className="homeText-Inner3">
              <div className="homeText-Inner4">
                <h4>Work</h4>
                <h4>Studio</h4>
                <h4>News</h4>
                <h4>Contact</h4>
              </div>

              <div className="homeText-Inner-address">
                <h5>hello@exoape.com</h5>
                <h5>+31 772 086 200</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page1;
