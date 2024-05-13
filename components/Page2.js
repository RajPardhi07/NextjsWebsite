"use client"
import { motion } from "framer-motion";
import React from 'react'


const Page2 = () => {
  return (
    <div className="homePage2">
      <div className="topdiv">
        <div className="homeWorkText">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}>
            Work
          </motion.h1>
        </div>

        <div className="homePage2-center">
          <div className="homePage2-center-left">
            <img src="https://a.storyblok.com/f/133769/2400x2990/61c001bac1/columbia-pictures-hero.jpg/m/2400x2990/filters:quality(80)" alt="" />
            <p className='my-2'><b>Lorem ipsum - </b> dolor sit amet consectetur, adipisicing elit. Nemo, delectus?</p>

          </div>

          <div className="homePage2-center-right">
            <div className="homePage2-center-right1">
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
              <h2>Featured Projects</h2>
            </div>

            <div className="homePage2-center-right2">
              <h2>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</h2>


            </div>
            <img className='w-[85%]' src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/2400x2990/filters:quality(80)" alt="" />
            <p className='my-2 overflow-hidden'><b>Lorem ipsum - </b> dolor sit amet consectetur, adipisicing elit. Nemo.</p>



          </div>

        </div>

      </div>

      <div className="homePage2-bottomdiv">
        <div className="HP2-bottomdiv-part1">
          <img src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)" alt="" />
          <p className='my-2 overflow-hidden'><b>Lorem ipsum - </b> dolor sit amet const.</p>

        </div>

        <div className="HP2-bottomdiv-part2">
          <img src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/2400x2990/filters:quality(80)" alt="" />
          <p className='my-2 overflow-hidden'><b>Lorem ipsum - </b> dolor sit amet consectetur, adipisicing elit. Nemo.</p>

        </div>
        <h1 className='underline text-right text-lg mt-20 mr-56'>Browse all work</h1>

      </div>



    </div>





  )
}

export default Page2
