import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex-col items-center p-2'>
        <div className='flex'>
        <img src="http://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png" alt="User image" className=' w-6 h-6 mt-3'/>
        <span className='bold px-2 mt-2 dark:text-black'>{name}</span>
        </div>

        <span className='mt-3 break-words dark:text-black'>{message}</span>
        
    </div>
    
  )
}

export default ChatMessage