import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCourseDetail = () => {
    const allCourses = useLoaderData([])
    console.log(allCourses);
  const{title}=allCourses
    return (
        <div>
         <h2>{title}</h2>
        </div>
    );
};

export default AllCourseDetail;