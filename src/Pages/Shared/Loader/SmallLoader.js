import React from 'react';

const SmallLoader = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-[80vh]">
                <div className="border-dashed border-primary animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                </div>
            </div>
        </div>
    );
};

export default SmallLoader;