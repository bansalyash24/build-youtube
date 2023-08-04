import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    // Early return
    if(!isMenuOpen) return null
  return (
    <div className='p-5 shadow-lg w-48 m-2'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Video</li>
        </ul>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
        </ul>
        <h1 className='font-bold'>Watch later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
        </ul>
    </div>
  )
}

export default SideBar