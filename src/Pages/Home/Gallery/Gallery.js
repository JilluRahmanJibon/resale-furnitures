import React from 'react';
import img1 from '../../../Pages/assets/images/600-x-1005-1.jpg'
import img2 from '../../../Pages/assets/images/600-x-1005.jpg'
import img3 from '../../../Pages/assets/images/600x1005.jpg'
import img4 from '../../../Pages/assets/images/700-x-936-13.jpg'
import img5 from '../../../Pages/assets/images/700-x-936-3.jpg'
import img6 from '../../../Pages/assets/images/700-x-936-4.jpg'
import img7 from '../../../Pages/assets/images/700-x-936-7.jpg'
import img8 from '../../../Pages/assets/images/rock-in-chair.jpg'
import img9 from '../../../Pages/assets/images/700-x-936-8.jpg'
const Gallery = () => {
    const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img6 }, { img: img5 }, { img: img7 }, { img: img8 },]
    return (
        <section className='pb-12 border-b border-gray-300 pt-5'>
            <h1 className='sm:text-3xl text-xl font-semibold pl-4 pb-2'>Gallery</h1>
            <div className="container grid grid-cols-2 gap-4 p-4 pb-0 mx-auto md:grid-cols-4">
                {
                    images.map((image, idx) => <div key={idx}>
                        <img className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square' src={image.img} alt="" /></div>)
                }

            </div>
            <div className='grid container mx-auto grid-cols-2  p-4 gap-3 '>
                <img className=' rounded shadow-sm sm:max-h-96 h-full w-full  min-h-48 dark:bg-gray-500 aspect-square' src={img9} alt="" />
                <img className=' rounded shadow-sm sm:max-h-96 h-full w-full  min-h-48 dark:bg-gray-500 aspect-square' src={img8} alt="" />
            </div>
        </section>
    );
};

export default Gallery;