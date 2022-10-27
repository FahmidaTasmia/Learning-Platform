import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourseDetail from '../AllCourseDetail/AllCourseDetail';
import Hero from '../Hero/Hero';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
           <Hero></Hero>
           <div>
            <h2>courses :{courses.length}</h2>
            {
                courses.map(course=> <AllCourseDetail key={course._id}>
                  course =  {course}

                </AllCourseDetail>)
            }
           </div>
          
        </div>
    );
};

export default Home;