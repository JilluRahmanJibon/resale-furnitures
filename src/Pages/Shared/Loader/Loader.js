import React from 'react';

const Loader = () => {
    return (
        <div className="flex h-[100vh]  justify-center items-center">
            <div className="border-dashed border-primary animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            </div>
        </div>
    );
};

export default Loader;