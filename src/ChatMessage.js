import React, { useEffect } from 'react'

// const data
const ChatMessage = ({name,message}) => {
   
  return (
    <div className='flex items-center p-2 shadow-sm'>
        <img className='h-8' alt='user' src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage