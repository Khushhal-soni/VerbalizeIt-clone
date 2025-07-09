import React from 'react'
import mobile from '../assets/mobile.png';
import Ellipse252 from '../assets/Ellipse252.png';
import Ellipse251 from '../assets/Ellipse251.png';
import Ellipse250 from '../assets/Ellipse250.png';
import Ellipse248 from '../assets/Ellipse248.png';
import Group464 from '../assets/Group464.png';
import spotifyseeklogo from '../assets/spotifyseeklogo.png'
import Component50 from '../assets/Component50.png'
import Component51 from '../assets/Component51.png'
import zoomseeklogo from '../assets/zoomseeklogo.png'


const First = () => {
    return (
        <div className='raleway'>
            {/* navbar section */}
            <div className='py-5 flex justify-between items-center'>
                <h1 className='text-2xl raleway font-bold'>VerbalizeIt</h1>
                <div className='hidden md:flex items-center justify-between gap-12'>
                    <h1 className='text-base'><a href="">Service</a></h1>
                    <h1 className='text-base'><a href="">Blog</a></h1>
                    <h1 className='text-base'><a href="">About us</a></h1>
                    <h1 className='text-base'><a href="">Contact</a></h1>
                </div>
                <button className='bg-amber-300 hidden sm:block px-10 py-3 rounded-full font-semibold'>Register</button>
            </div>
            <div className='border border-gray-300'></div>
            {/* navbar ends here */}


            {/* main banner */}
            <div className="flex flex-col items-center justify-center text-center lg:gap-x-30 lg:flex-row mt-20 lg:text-left md:flex-col">
                <div className=' w-full md:w-1/2 h-auto flex flex-col gap-10                                                                                                                                                                                        '>
                    <h1 className='text-4xl text-center md:text-6xl lg:text-7xl lg:text-left raleway font-bold'>We make you learn language easily!</h1>
                    <p className='text-[22px]'>We help you learn language easily, with small lessons , you`ll
                        earn points and unlock new levels while improving you rel world
                        communications.</p>

                    <div className='flex flex-col gap-4 items-center md:flex-col lg:flex-row md:gap-5'>
                        <input className='w-full min-w-[200px] px-5 py-3 rounded-full bg-gray-100 md:pl-4 md:py-4 md:pr-30 ' type="text" placeholder='Enter your email' />
                        <button className='w-full py-4 bg-amber-300 rounded-full font-bold md:py-4'>Get Started</button>
                    </div>
                </div>

                <div className='mt-10 hidden lg:mt-0 lg:block w-full lg:w-1/2 justify-center md:mt-30 md:w-[70%]'>
                    <img src={mobile} alt="..." className='max-w-full h-auto' />
                </div>
            </div>

            {/* end section */}
            <div className="flex mb-10 flex-col mt-10 space-y-35 justify-center items-center lg:justify-between lg:flex-row">
                <div className='relative w-[200px] flex justify-center mt-12 lg:top-8'>
                    <img src={Ellipse252} alt="" className="absolute left-5 sm:left-0" />
                    <img src={Ellipse251} alt="" className="absolute left-13 sm:left-8" />
                    <img src={Ellipse250} alt="" className="absolute left-21 sm:left-16" />
                    <img src={Ellipse248} alt="" className="absolute left-29 sm:left-24" />
                    <img src={Group464} alt="" className="absolute left-37 sm:left-32" />
                </div>


                <div className='flex flex-col gap-20 lg:flex-row'>
                    <img src={Component50} alt="" className='h-7' />
                    <img src={spotifyseeklogo} alt="" className='h-7' />
                    <img src={Component51} alt="" className='h-7' />
                    <img src={zoomseeklogo} alt="" className='h-7' />
                </div>

            </div>

            <div className='text-gray-300 border w-full'></div>
        </div>
    )
}

export default First
