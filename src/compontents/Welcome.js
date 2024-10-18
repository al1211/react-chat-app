import React, { useEffect, useState } from 'react'
import "./../index.css"
import logo from "./../assets/logo192.png";
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged} from "firebase/auth"
import { app } from '../Firebase/firebase';
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
const Welcome = () => {
  const [user,setUser]=useState();
  const [logged,setLogged]=useState(false);
  useEffect(()=>{
   onAuthStateChanged(auth,user=>{
     if(user){
 
       setLogged(true);
       setUser(user);

     }else{
       setLogged(false)
     }
   })
  },[])
  const Authwithgoogle=()=>{

    signInWithPopup(auth,provider);
  }
  return (
  
  <div className='welcome'>

  {logged ? <h1 className='p'>Welcome to React Chat Application</h1>:<p>You are not loggin</p>}
 <img src={logo} alt='heloo'></img>
 <p className='p'>Singin in with Google to chat with your fewlow React Developers</p>
 {
   logged?<h1 className='p'>hellow {user.email}</h1>:null
  }
 <button className='btn' onClick={Authwithgoogle}>Sing in with Google</button>
  </div>
  
  )
}

export default Welcome