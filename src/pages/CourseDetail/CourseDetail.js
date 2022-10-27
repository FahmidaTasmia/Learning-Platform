import React from 'react';
import { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const pdfRef = createRef()


const CourseDetail = () => {
    const courseDetail = useLoaderData([]);
   const {title, image_url,learn, details,_id} = courseDetail;
    // const{title,details}=courseDetail;
    return (
        <div className='grid ' ref={pdfRef}>
         <div className="card card-compact  bg-base-100 shadow-xl">
           <div className='text-center gap-8 justify-center items-center grid'>
          <div> <h2 className='font-bold text-2xl font-serif text-blue-600'>{title}</h2></div>

           <Pdf targetRef={pdfRef} filename="course.pdf">
        {({ toPdf }) =>           <button className='btn mb-8 btn-primary rounded-full' onClick={toPdf}>Download PDF</button>}
      </Pdf>
           </div>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body text-center">
        <p> <span className="card-title text-3xl text-center font-bold text-blue-600 font-serif">What You Learn From this course:</span>{learn} </p>
        <p> <span className="card-title text-3xl text-center font-bold text-blue-600 font-serif">Details:</span>{learn} </p>
    <p>{details}</p>
    <div className="card-actions justify-end">
    <Link className='btn w-64 text-center btn-sm btn-primary  hover:font-semibold mb-3 rounded' to={`/checkout/${_id}`}>Checkout</Link>
    </div>
  </div>
</div>
         
        </div>
    );
};

export default CourseDetail;