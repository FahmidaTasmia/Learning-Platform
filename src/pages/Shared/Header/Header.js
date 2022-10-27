import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <div className="navbar bg-gradient-to-r shadow-lg ">
            <div className="navbar-start">
        
            <div className="btn btn-ghost normal-case text-xl">PI_learning</div>

            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/checkout'>Checkout</Link>
                
            </div>
            </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal p-0 hover:font-bold">
                <Link className='mr-3' to='/'>Home</Link>
                <Link className='mr-3' to='/courses'>Courses</Link>
                <Link className='mr-3' to='/blog'>Blog</Link>
                <Link className='mr-3' to='/faq'>FAQ</Link>
                <Link className='mr-3' to='/checkout'>Checkout</Link>
                
                </div>
            </div>
            <div  className="navbar-end">
                <Link to='/login'><button className="btn border-none  md:btn-sm btn-xs mr-5 ">Get started</button></Link>
                
            </div>
            </div>
    );
};

export default Header;