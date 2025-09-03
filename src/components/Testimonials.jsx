import React, { useState } from 'react'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex]=useState(0);
    const testimonials=[
        {
            quote:'This is the best product i have ever used',
            auther:'jane doe'
         },
        {
            quote:'I recommend this product to everyone',
            auther:'Mike Woub'
         },
        {
            quote:'wow what a product to have on your hands',
            auther:'betty Fekadu'
         },
        
                    ]
    const handlePrev=()=>{
        setCurrentIndex((currentIndex + testimonials.length-1) % testimonials.length);
    }
    const handleNext=()=>{
        setCurrentIndex((currentIndex + testimonials.length+1) % testimonials.length);
    }
  return (
    
    <div className='testimonials-container'>
    
        <div className='testimonials'>
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>
            <div className='testimonials-author'>
                - {testimonials[currentIndex].auther}
            </div>
            <div className='testimonials-nav'>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
        </div> 
    </div>

    </div>
  )
}

export default Testimonials