import React from 'react'
import "./../index.css"
import avtar  from './../assets/avtar.png'
import SendMessage from './SendMessage'
import { useState,useRef,useEffect } from 'react'
import { query,collection,onSnapshot,limit,getFirestore, } from 'firebase/firestore'
import { app } from '../Firebase/firebase'
import Message from './Message'
const db=getFirestore(app);
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll=useRef();
  useEffect(()=>{
  const q=query(collection(db,"message"),limit(50));
  const unsubcribe=onSnapshot(q,(QuerySnapshot)=>{
    const fetchMessage=[];
    QuerySnapshot.forEach((doc)=>{
      fetchMessage.push({...doc.data(),id:doc.id});
    });
    // const sortMessage=fetchMessage.sort((a,b)=>a-b);
    setMessages(fetchMessage) 
  });
  return ()=>unsubcribe;
  },[])
  return (
   <>
   <div className='chat'>
    <div className='chat-box'>
     <img src={avtar} alt='hrllow'></img>
     <div className='text'>

    <p className='h'>Thomas awsome</p>
    <p className='sh'>This is real chat application.</p>

     </div>
 
    </div>
    <div className='end'>

     {
      messages?.map((message)=>(
        <Message message={message} key={message.id}/>
      ))
     }
    </div>
    <span ref={scroll}></span>
 
    <SendMessage scroll={scroll}/>
   </div>
   </>
  )
}

export default ChatBox