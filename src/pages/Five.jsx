import React from 'react'

const Five = () => {
    return (
        <>
            <div className='mt-32 raleway flex flex-col gap-15 mb-15 lg:flex-row lg:justify-between'>
                <div className='text-center space-y-10 lg:space-y-5 lg:text-left'>
                    <p className='text-4xl font-bold'>VerbalizeIt</p>
                    <p className='lg:w-[33%]'>Learning is  a global training provider
                        based across the UK that specialises
                        in accrodited and bespoke training
                        course.
                    </p>
                </div>

                <div className='flex text-left justify-between lg:gap-20'>
                    <div className='flex flex-col space-y-5'>
                        <p>About Us</p>
                        <p>Service</p>
                        <p>Blog</p>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <p>Terms & conditions</p>
                        <p>Privacy Policy</p>
                        <p>Become a Partner</p>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <p>Twitter</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>

            <div className='border border-gray-300'></div>
            <p className='text-center raleway mt-5 pb-5'>Privacy Policy | Terms & Conditions | Cookies Policy </p>
        </>
    )
}

export default Five
