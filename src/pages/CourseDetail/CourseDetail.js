import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CourseDetail = () => {
    const courseDetail = useLoaderData([]);
    console.log(courseDetail);
    // const{title,details}=courseDetail;
    return (
        <div>
         <h2>this is courses :{courseDetail.length}</h2>
         <h2>{courseDetail.title}</h2>
         
        </div>
    );
};

export default CourseDetail;