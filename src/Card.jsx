import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='flex flex-col items-center justify-center gap-4 border-2 bg-blue-100 rounded-lg shadow-lg  p-6'>
                <div className='p-4 rounded-full'>
                    <img
                        className='h-20 w-20 rounded-full'
                        src='https://media.licdn.com/dms/image/v2/D4D03AQEKOC5IomFWJA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694273525680?e=1755734400&v=beta&t=1hEMWUGMV3f5dsVLj6qnFSxp5GJi6QZdZRY2BUNqXvE'
                        alt='profile'
                    />
                </div>
                <div className='text-center'>
                    <p className='text-lg font-bold'>Tailwind CSS</p>
                    <p className='text-lg text-gray-500'>By Khushhal Soni</p>
                </div>
            </div>

            <button className='bg-sky-500  px-16 text-center mt-9 py-2 rounded-2xl text-white shadow-2xl hover:bg-sky-600 hover:text-black'>
                Buy now
            </button>

            <div className='mt-10'>
                <div className='max-w-sm mx-auto bg-white md:max-w-2xl rounded-xl overflow-hidden md:flex '>
                    <div>
                        <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/2522657/pexels-photo-2522657.jpeg?_gl=1*s2s1s*_ga*ODEyMTU1NzY0LjE3NTAxNTAxNzg.*_ga_8JE65Q40S6*czE3NTAxNTAxNzgkbzEkZzEkdDE3NTAxNTA1NjIkajIwJGwwJGgw" alt="" />
                    </div>
                    <div className='p-8'>
                        <div className='uppercase text-sm text-indigo-500 font-semibold'>An awesome card</div>
                        <a className='block mt-1 text-lg font-medium text-black hover:text-blue-700' href="#">Tailwind css is amazing once you understand the power of it</a>
                        <p className='mt-3 text-slate-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
