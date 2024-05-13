"use client"
import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Page3 = () => {

    var imagediv = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(imagediv.current, {
            scrollTrigger: {
                trigger: imagediv.current,
                start: "0 100%",
                end: "-=200",
                scrub: 1,
                markers: true
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100% )"
        })
    }, [])

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div ref={imagediv} style={{ clipPath: "polygon(20% 0%, 80% 0%, 80% 100%, 20% 100% )" }}
                className='w-[100vw] h-full bg-red-300'>
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1711539925041-c94ababfb763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>

        </div>)
}

export default Page3