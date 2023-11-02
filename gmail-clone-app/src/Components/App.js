import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Inbox from './Inbox';
import Outbox from './Outbox';
import Navbars from './Navbar';
import Search from './Search';
import Starred from './Starred';
import Archive from './Archive';
import Compose from './compose';


export default function App() {
  const [messages, setMessages] = useState([]);
  const [filterText, setFilterText]= useState('');

  useEffect(()=>{
    fetch('http://localhost:3000/messages')
    .then(r => r.json())
    .then((messages) => setMessages(messages))
  },[])

  function handleNewMail (newMail) {
    const updatedMessages = [...messages, newMail];
    setMessages(updatedMessages)
  }
  return (
    <div className='container-fluid bg-muted min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-transparent vh-100'>
          <Navbars />
        </div>
        <div className='col'>
          <Search filterText={filterText} setFilterText={setFilterText} />
          <Routes>
            <Route exact path='/' element={<Inbox messages={messages} filter={filterText}/>}/>
            <Route path='/outbox' element={<Outbox messages={messages} filter={filterText}/>}/>
            <Route path='/archive' element={<Archive messages={messages} filter={filterText}/>}/>
            <Route path='/starred' element={<Starred messages={messages} filter={filterText}/>}/>
            <Route exact path='/compose' element={<Compose handleNewMail={handleNewMail}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

