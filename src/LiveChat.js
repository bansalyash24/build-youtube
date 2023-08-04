import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/chatSlice';
import {getRandomName,getRandomStrings} from './utils/helper'

const LiveChat = () => {
    const dispatch=useDispatch();
    const [inputValue,setinputValue]=useState("")
    const ChatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const id=setInterval(()=>{
            //Api polling
            console.log("API polling")
            dispatch(addMessage({
                name:getRandomName(),
                message:getRandomStrings(10)
            }))
        },1500)
        return ()=>{
            clearInterval(id)
        }
    },[])
  return (
    <>
        <div className='flex flex-col-reverse p-2 border border-black w-full bg-slate-100 rounded-lg h-[32rem] overflow-y-scroll '>
            <div>
            {ChatMessages.map((message,id)=>{
                return <ChatMessage name={message.name} message={message.message} key={id}/>
            })}
            </div>
            
        </div>
        <div className='w-full p-2 my-2 border border-black rounded-lg'>
            <form  onSubmit={(e)=>{
                e.preventDefault()
                dispatch(addMessage({
                    name:"User",
                    message:inputValue
                }))
                setinputValue('')
            }}>

            <input type='text' placeholder='Enter your message here' className='w-11/12 p-2' value={inputValue} onChange={(e)=>{setinputValue(e.target.value)}}/>
            <button className='w-1/12 bg-blue-500 text-white rounded-md p-2' type='submit'>Send</button>
            </form>

        </div>
    </>
    
  )
}

export default LiveChat