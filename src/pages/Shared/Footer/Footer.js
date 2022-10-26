import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10  text-base-content bg-blue-600  ">
       <div >
        <h4 className='text-lg text-white uppercase font-sans font-semibold'>PI Learning</h4>
       </div>
       <div className="divider lg:divider-horizontal"></div> 
        <div >
          <span className="text-lg text-white uppercase font-sans font-semibold">Company</span> 
          <Link className="link link-hover uppercase font-sans text-white">Home</Link>
          <Link className="link link-hover uppercase font-sans text-white">Courses</Link>
          <Link className="link link-hover uppercase font-sans text-white">Blog</Link>
          <Link className="link link-hover uppercase font-sans text-white">Checkout</Link>
        </div> 
        <div className="divider \ lg:divider-horizontal"></div> 
        <div >
          <span className="text-lg text-white uppercase font-sans font-semibold">Legal</span> 
          <Link className="link link-hover uppercase font-sans text-white">Terms of use</Link>
          <Link className="link link-hover uppercase font-sans text-white">Privacy Policy</Link>
          <Link className="link link-hover uppercase font-sans text-white">Cookie policy</Link>
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div>
    <span className="text-lg text-white uppercase font-sans font-semibold">Social</span> 
    <p className='uppercase font-sans text-white'>Stay with US:</p>
    <div className="grid grid-flow-col gap-4">
     <FaFacebook className='text-white w-5 mt-5 h-5'></FaFacebook>
     <FaGoogle   className='text-white w-5 mt-5 h-5'></FaGoogle>
     <FaLinkedin className='text-white w-5 mt-5 h-5'></FaLinkedin>
     <FaTwitter  className='text-white w-5 mt-5 h-5'></FaTwitter>
    </div>
  </div>
        
     </footer>
     <footer className="footer footer-center p-4 text-base-content border-t-2 bg-blue-600">
          
  <div className='text-gray-300 font-sans'>
    <p>Copyright © 2022 - All right reserved by PI Learning</p>
  </div>
</footer>
        </div>
     
    );
};

export default Footer;