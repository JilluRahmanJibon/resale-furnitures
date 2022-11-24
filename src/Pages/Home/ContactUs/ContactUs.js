import React from 'react';
import img from '../../../Pages/assets/contact/doodle.svg';
const ContactUs = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1  gap-8 sm:px-8 px-3 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <img src={img} alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm text-gray-800 font-semibold">Full name</label>
                    <input id="name" type="text" placeholder="Your Name" required className="w-full input input-bordered  p-3 rounded " />
                </div>
                <div>
                    <label for="email" className="text-sm text-gray-800 font-semibold">Email</label>
                    <input id="email" type="email" required placeholder="Your Email" className="w-full input input-bordered  p-3 rounded " />
                </div>
                <div>
                    <label for="message" className="text-sm text-gray-800 font-semibold">Message</label>
                    <textarea id="message" required rows="3" className="w-full textarea textarea-bordered p-3 rounded " placeholder='Say somethings.....' spellcheck="false"></textarea>
                </div>
                <button type="submit" className="w-full input input-bordered  p-3 text-sm text-gray-800 font font-semibold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;