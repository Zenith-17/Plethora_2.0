import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import generateName from '../utils/helper';
import { generateRandomString } from '../utils/helper';


const LiveChat = () => {   
    const [liveMessage,setLiveMessage]=useState(""); 
    const dispatch=useDispatch();

    const ChatMessages=useSelector((store)=>store.chat.messages); //subscribing to chat messages slice of the redux store
    useEffect(()=>{
        //displaying messages of live chat after every 2 seconds
        const i=setInterval(()=>{

            dispatch(addMessage({
                name:generateName(),
                message:generateRandomString()
            }))
        },2000)

        return ()=>clearInterval(i);
    },[])
  return (
    <div>
        <h1 className='font-bold text-center text-2xl mb-2  mr-20 '>Live Chat</h1>
    <div className='ml-2 p-2 border-black w-96 h-[600px] bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse  dark'>
        <div>
        {
            ChatMessages.map((c,index)=><ChatMessage
                key={index}
                name={c.name}
                message={c.message}
                />
                )
        }
        </div>
        
    </div>
    <form className=' w-full p-2 ml-2 boder border-black flex' 
    onSubmit={(e)=>{   
        //preventing default will help in preventing the reloading of the page
        e.preventDefault();
        dispatch(addMessage({
            name:"Atharva", 
            message:liveMessage,
        }))
        setLiveMessage("")
    }
    }
    >
            <input type="text" className='w-[18rem] bg-slate-100 px-2 break-words h-8 rounded-md dark:text-black' value={liveMessage}
            onChange={(e)=>setLiveMessage(e.target.value)}
            />
            <button className='px-2 mx-2 rounded-md bg-green-200 dark:text-black '>Send</button>
     </form>
    </div>
    
  )
}

export default LiveChat