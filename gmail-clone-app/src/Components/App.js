import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Inbox from './Inbox';
import Outbox from './Outbox';
import Navbars from './Navbar';
import Search from './Search';
import Starred from './Starred';
import Archive from './Archive';


export default function App() {
  const [messages, setMessages] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/messages')
    .then(r => r.json())
    .then((messages) => setMessages(messages))
  },[])

  
  return (
    <div>
      <Navbars />
      <Search />
      <Routes>
        <Route exact path='/' element={<Inbox messages={messages}/>}/>
        <Route path='/outbox' element={<Outbox messages={messages}/>}/>
        <Route path='/archive' element={<Archive messages={messages}/>}/>
        <Route path='/starred' element={<Starred messages={messages}/>}/>
      </Routes>
    </div>
  )
}

