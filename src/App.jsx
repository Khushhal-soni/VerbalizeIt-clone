import React from 'react'
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Four from './pages/Four';
import Five from './pages/Five';


const App = () => {
  return (
    <>
      <div className='px-10 sm:px-25'>
        <First />
        <Second />
        <Third />
      </div>
      <Four />
      <div className='px-10 sm:px-25'>
        <Five/>
      </div>
    </>
  )
}

export default App
