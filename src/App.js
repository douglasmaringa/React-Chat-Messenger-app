import React, { useState,useEffect} from "react";
import "./App.css";
import Message from "./Message"
import firebase from "firebase"
import db from "./firebase";
import {TextField,Button} from "@material-ui/core"

function App(){

  const[input,setInput] = useState("")
  const [messages,setMessages]= useState([
   { username:"",text:""},
   {username:"",text:""}
  ])
  const [username, setUsername]=useState("")

  useEffect(()=>{
    db.collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()))
    })
  },[])
  useEffect(()=>{
    setUsername(prompt('please enter your name'))
    
  },[])
 
  

  const sendMessage = (event)=>{
    event.preventDefault()
    db.collection("messages").add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
      
    })


   
    setInput('');
  }
  return (
    <div className="App">
      <h1>Marco's Messenger app</h1>
      <form >
    
    <TextField value={input} onChange={event=>setInput(event.target.value)} id="standard-basic" label="Standard" />
     
     <Button type="submit" onClick={sendMessage} variant="contained" color="primary">
  Send
</Button>
     </form>
     <ul >
       {messages.map(message=>(
      <h2> <Message username={username} message={message}/></h2>
       ))}
     </ul>
     
     </div>
  );
}

export default App;
