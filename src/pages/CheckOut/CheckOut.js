import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const courseDetail = useLoaderData([]);
   const {title, image_url, details,_id} = courseDetail;
    // const{title,details}=courseDetail;
    return (
        <div className='grid '>
         <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <button className='border p-6 hover:font-semibold mb-3 mx-3 rounded' >Buy Now</button>
    </div>
  </div>
</div>
         
        </div>
    );
};

export default CheckOut;