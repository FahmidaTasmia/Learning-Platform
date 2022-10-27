import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    })
    return (
        <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white  w-64 my-12  shadow-lg'>
            <h4 className='font-bold font-serif my-3 p-3'>Select your suitable Course </h4>
            <div className=' '>
                {
                    categories.map(category=> <div className='grid ' 
                        key={category.id}>
                            <Link className='border p-6 hover:font-semibold mb-3 mx-3 rounded' to={`/courses/${category.id}`}>{category.name}</Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default LeftsideNav;