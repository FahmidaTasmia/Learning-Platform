import React from 'react';
import { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const pdfRef = createRef()


const CourseDetail = () => {
    const courseDetail = useLoaderData([]);
   const {title, image_url, details,_id} = courseDetail;
    // const{title,details}=courseDetail;
    return (
        <div className='grid ' ref={pdfRef}>
         <div className="card card-compact  bg-base-100 shadow-xl">
           <div className='text-center gap-8 justify-center items-center flex'>
           <h2>{title}</h2>

           <Pdf targetRef={pdfRef} filename="course.pdf">
        {({ toPdf }) =>           <button className='btn' onClick={toPdf}>Download PDF</button>}
      </Pdf>
           </div>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <Link className='border p-6 hover:font-semibold mb-3 mx-3 rounded' to={`/checkout/${_id}`}>Checkout</Link>
    </div>
  </div>
</div>
         
        </div>
    );
};

export default CourseDetail;