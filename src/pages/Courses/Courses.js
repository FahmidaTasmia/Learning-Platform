import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourseDetail from '../AllCourseDetail/AllCourseDetail';

import LeftsideNav from '../LeftSideNav/LeftsideNav';



const Courses = () => {
    const courses = useLoaderData();

   
    return (
        <div className='flex gap-5'>
             <div className='h-full'><LeftsideNav></LeftsideNav></div>
    


    <div className='grid md:grid-cols-3 container m-auto md:gap-12 gap-5 md:my-12 '>
            {
                courses.map(course=> <AllCourseDetail key={course._id}  course =  {course}>
                 

                </AllCourseDetail>)
            }
           </div>
        </div>
    );
};

export default Courses;