import React, { useState } from 'react'
import "./../index.css"

import { getFirestore,addDoc,collection} from 'firebase/firestore'
import { app } from '../Firebase/firebase';

const db=getFirestore(app);
const SendMessage = ({scroll}) => {
  const [message,setMessage]=useState("");
  const SendMessages=async (event) => {
    event.preventDefault();
    if(message.trim()===""){
      alert("Enter valid Message");
      return; 
    }
    await addDoc(collection(db,"message"),{
      text:message
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <form className="send-message" onSubmit={(event)=>SendMessages(event)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        type="text"
        className="form-input__input"
        placeholder="type message..."
       autoComplete='true'
      />
      <button type="submit" className='btn'>Send</button>
    </form>
  )
}

export default SendMessage