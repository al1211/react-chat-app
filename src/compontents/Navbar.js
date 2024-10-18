import React, { useEffect, useState } from 'react'
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from 'firebase/auth'
import { app } from '../Firebase/firebase'

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const Navbar = () => {
   const [user,setUser]=useState(false);
  useEffect(()=>{
   onAuthStateChanged(auth,use=>{
      if(use){
        setUser(true)
      }else{
        setUser(false);
      }
   },[])
  },)
   const Googleauth=()=>{
      signInWithPopup(auth,provider);
   }
  return (
 <header>
    <nav className="nav">
       <h1>React Chat</h1>
       {user ? <button className='btn' onClick={()=>signOut(auth)}>Logout</button>:<button className='btn' onClick={Googleauth}>Google SingIn</button>}
       
    </nav>
 </header>
  )
}

export default Navbar