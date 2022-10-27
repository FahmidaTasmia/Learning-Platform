import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData() ;
    return (
        <div>
           <h2>this is total course :{courses.length}</h2> 
        </div>
    );
};

export default Courses;