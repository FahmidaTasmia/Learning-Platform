import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Lottie from 'lottie-web';
import { Link } from 'react-router-dom';

const Hero = () => {
    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./hero.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className='grid grid-cols-2 container m-auto'>
            <div className='text-center m-auto '>
            <h1 className='font-sans text-blue-600 mb-5 uppercase font-bold'>Welcome To PI Learning</h1>
                    <p  className=' font-serif text-blue-600 uppercase font-bold lg:text-2xl'>Best Online Education Expertise</p>
                    <p className='font-sans mt-8 text-xs lg:text-lg'>PI Learning is a Spiritualist organization dedicated to the study, application, and dissemination of The Living Light philosophy </p>
                   <Link to='/login'> <button className='btn btn-sm btn-primary mt-8 '> Get Started <FaArrowRight className='ml-2'></FaArrowRight></button></Link>
            </div>
            <div className='container w-75 h-75' ref={container}></div>
        </div>
    );
};

export default Hero;