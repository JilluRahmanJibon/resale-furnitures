import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Pages/assets/banner/Business_SVG.svg'
const Banner = () => {
    return (
        <div>
            <section>
                <div className="sm:container flex flex-col justify-center sm:p-6 p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className=" text-xl font-bold leading-none sm:text-6xl">Your Home, <br />
                            <span className="dark:text-violet-400">Your </span>Way
                        </h1>
                        <p className="mt-6 mb-8 md:text-2xl font-semibold text-xl sm:mb-12">Chose from wide collection of Bengal &
                            <br className="hidden md:inline lg:hidden" /><span className='lg:pl-2'>Decorate your home in your Way.</span>
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get Shopping</Link>

                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;