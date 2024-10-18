
import { useEffect, useState } from 'react';
import ChatBox from './compontents/ChatBox';
import Navbar from './compontents/Navbar';
import Welcome from './compontents/Welcome';
import './index.css';
import {onAuthStateChanged,getAuth} from "firebase/auth"
import { app } from './Firebase/firebase';
const auth =getAuth(app);
function App() {
  const [user,setUser]=useState(null);


  console.log("Project Starting ....");

  useEffect(()=>{
  onAuthStateChanged(auth,user=>{
  if(user){
    setUser(true)
  }else{
    setUser(false);
  }
  })
  },[])
  return (
    <>
   <Navbar/>
   <main>
{user? <ChatBox/>: <Welcome/>}
  
  
   </main>
    </>
  );
}

export default App;
