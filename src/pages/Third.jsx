import React from 'react'
import Componenter from '../assets/Componenter.png'

const Third = () => {
  return (
    <div className='flex flex-col gap-10 mb-40'>
      <div className='flex flex-col text-center gap-5'>
        <p className='text-4xl raleway font-bold lg:text-5xl'>Learn a new language the fun way</p>
        <p className='text-sm raleway'>Reach your language goals fast with the world`s #1 education app</p>
      </div>

      <div>
        <img className='w-full' src={Componenter} alt="" />
      </div>

      <div className='flex flex-col items-center justify-center text-center gap-10 md:flex-row md:justify-between'>
        <div className='space-y-2'>
          <p className='text-6xl font-bold md:text-7xl'>4.5k+</p>
          <p className='text-sm raleway'>Daily register from new users</p>
        </div>

         <div className='space-y-2'>
          <p className='text-6xl font-bold md:text-7xl'>1.5+</p>
          <p className='text-sm raleway'>Language In the world</p>
        </div>

         <div className='space-y-2'>
          <p className='text-6xl raleway font-bold md:text-7xl'>1000+</p>
          <p className='text-sm raleway'>Total learners in the world</p>
        </div>
      </div>
    </div>
  )
}

export default Third
