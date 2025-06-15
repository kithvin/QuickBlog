import React from 'react'

const Loader = () => {
  return (

    // Full-screen centered container

    <div className='flex justify-center items-center h-screen'>

    {/* Spinning circle loader */}
    
    <div className='animate-spin rounded-full h-16 w-16 border-4
    border-t-white border-gray-700'></div>
    </div>
  )
}

export default Loader