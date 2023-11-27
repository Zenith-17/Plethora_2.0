//created hamburer icon
import React from 'react'
const   Hamburger = () => {
    
  return (
    <div className='w-10 h-4 flex gap-2 flex-col ml-5 mt-4 hover:cursor-pointer '>
        <div className='w-7 h-1 dark:bg-white dark:text-black bg-black text-white '>-</div>
        <div className='w-7 h-1 dark:bg-white dark:text-black  bg-black text-white '>-</div>
        <div className=' w-7 h-1 dark:bg-white dark:text-black bg-black text-white '>-</div>
    </div>
  )
}

export default Hamburger