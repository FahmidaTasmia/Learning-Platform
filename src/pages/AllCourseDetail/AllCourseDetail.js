import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCourseDetail = ({course}) => {
  const{title,image_url,skill,learn,category_id}=course;
    // const allCourses = useLoaderData([])
   
  
    return (
        <div className='grid grid-cols-2 '>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={image_url} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{skill}</p>
                <div className="card-actions justify-end">
                <Link className='border p-6 hover:font-semibold mb-3 mx-3 rounded' to={`/courses/${category_id}`}>Buy Now</Link>
                </div>
              </div>
          </div>
        </div>
    );
};

export default AllCourseDetail;