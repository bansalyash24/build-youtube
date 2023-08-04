import React from 'react'
import Button from './Button'

const list=['All','Live','Gaming','Cricket','Extras']
const ButtonList = () => {
  return (
    <div className='flex'>
        {list.map((items,index)=>{
            return <Button name={items} key={index}/>
        })}
    </div>
  )
}

export default ButtonList