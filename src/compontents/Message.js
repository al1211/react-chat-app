import React from 'react'
import avtar from "./../assets/avtar.png"
import "../index.css"
const Message = ( {message}) => {
  return (
    <div className='white right chat-box'>
         <img src={avtar} alt='hrllow'></img>
     <div className='text'>

    <p className='h'>Thomas awsome</p>
    <p className='sh'>{message.text}</p>

     </div>
    </div>
  )
}

export default Message