import React, { useMemo, useState } from 'react'
import { findPrime } from './utils/searchSlice'

const Demo = () => {
    const [text,setText]=useState(0)
    const [isDarkTheme,setIsDarkTheme]=useState(false);

    console.log("Rendering")

    // heavy operations
    const prime=useMemo(()=>findPrime(text),[text])
    // const prime=findPrime(text)
    

  return (
    <div className={`m-4 p-2 w-96 h-96 border border-black ${isDarkTheme && "bg-gray-900 text-white"}`}>
        <div>
            <button className={'bg-green-100 text-'+`${isDarkTheme?'white':'black'}`} onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>
        <div>
            <input type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h1 className='text-bold'>nth Prime :{prime}</h1>
        </div>
    </div>
  )
}
export default Demo