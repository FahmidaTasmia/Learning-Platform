import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='container m-auto grid gap-8 my-24'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
             What is Cors?
            </div>
            <div className="collapse-content"> 
                <p>In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.</p>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Why are you using firebase? What other options do you have to implement authentication?
            </div>
            <div className="collapse-content"> 
                <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it! Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps.</p>
            </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            How does the private route work?
            </div>
            <div className="collapse-content"> 
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            </div>


                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is Node? How does Node work?
                </div>
                <div className="collapse-content"> 
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
                </div>
        </div>

<div className='container mx-auto grid grid-cols-2 bg-gray-100 shadow-lg my-24 p-32 '>
<div className='m-auto'>
    <p className='font-bold md:text-2xl font-serif uppercase'>Are you ready For learning adventure !</p>
    <p className='font-bold mt-3 font-sans uppercase'>Do Not Miss Any Update</p>
</div>

<div className='mx-12' >
<div className="form-control ">
    <label className="label">
        <span className='font-bold mt-3 font-sans uppercase'>Enter your email address</span>
    </label> 
    <div className="relative ">
        <input type="text" placeholder="" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
    </div>
</div>
</div>

</div>
        </div>
    );
};

export default Faq;