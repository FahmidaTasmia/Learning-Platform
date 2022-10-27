import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourseDetail from '../AllCourseDetail/AllCourseDetail';
import Hero from '../Hero/Hero';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
           <Hero></Hero>
           <div className='md:my-24'>
           <div className='grid md:grid-cols-3 container m-auto md:gap-12 gap-5'>
            
            {
                courses.map(course=> <AllCourseDetail key={course._id}  course =  {course}>
                 

                </AllCourseDetail>)
            }
           </div>
           </div>
          
        </div>
    );
};

export default Home;