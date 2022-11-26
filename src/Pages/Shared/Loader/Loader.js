import React from 'react';

const Loader = () => {
    return (
        <div className="flex h-[100vh]  justify-center items-center">
            <h1 className='text-7xl font-bold'>L</h1>
            <div className="border-dashed mt-5 border-primary animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            </div>
            <h1 className='text-7xl font-bold'>ading</h1>
        </div>
    );
};

export default Loader;