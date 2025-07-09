import React from 'react'
import download from '../assets/download.png'
import download1 from '../assets/download1.png'

const Four = () => {
    return (
        <div className='bg-yellow-400 w-full flex flex-col gap-10 overflow-x-hidden pt-15 pb-15 px-10 space-y-10 md:w-full md:h-[60vh] md:items-center md:justify-center md:px-10 lg:px-16'>
            <p className='text-6xl text-center raleway font-bold md:text-6xl lg:w-[60%]'>Learn a new language for
                free download app Now!
            </p>

            <div className="flex flex-col gap-6 sm:flex-row items-center justify-center">
                <div className="flex items-center gap-4 bg-black text-white rounded-full py-4 px-6 md:min-w-[250px] md:max-w-[320px]">
                    <img className="w-10 h-10" src={download} alt="App Store" />
                    <div className="flex flex-col leading-none">
                        <p className="text-sm text-gray-300">Download on the</p>
                        <p className="text-xl font-semibold">App Store</p>
                    </div>
                </div>


                <div className="flex items-center gap-4 bg-black text-white rounded-full py-4 px-6 md:min-w-[250px] md:max-w-[320px]">
                    <img className="w-10 h-10" src={download1} alt="Google Play" />
                    <div className="flex flex-col leading-none">
                        <p className="text-sm text-gray-300">Download from</p>
                        <p className="text-xl font-semibold">Google Play</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Four
