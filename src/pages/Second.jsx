import React from 'react'
import Group1 from '../assets/Group1.png'
import Group2 from '../assets/Group2.png'
import Third from './Third'

const Second = () => {
    return (
        <>
            <div className='mt-16 mb-25 sm:mb-30 lg:mb-50 flex gap-20 sm:gap-30 flex-col items-center text-center lg:gap-10 lg:flex-row lg:justify-between '>
                {/* left section */}
                <div className='flex gap-10 flex-col sm:items-center md:flex-col md:items-center lg:items-start lg:w-[40%]'>
                    <p className=' text-3xl font-bold raleway md:text-5xl md:font-semibold lg:text-3xl lg:text-left lg:mb-9'>Why you`ll love learning
                        with Verbalizelt
                    </p>
                    <div className='w-full sm:size-100 lg:size-100 xl:size-130'>
                        <img src={Group1} alt="" />
                    </div>
                </div>

                {/* right section */}
                <div className='flex gap-10 flex-col sm:items-center md:items-center lg:items-end lg:w-[50%]'>
                    <p className='text-3xl font-bold raleway md:text-5xl md:font-semibold lg:text-3xl lg:text-left'>Reach your goals  your whay with features
                        designed for the fastets, most fun way to learn a
                        language.
                    </p>
                    <div className='w-full sm:size-100 lg:size-100 xl:size-130'>
                        <img src={Group2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
