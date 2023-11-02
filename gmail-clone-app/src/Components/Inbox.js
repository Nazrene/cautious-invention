import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';



export default function Inbox({messages, filter}) {
  //display received messages
  const inboxMessages = messages.filter((message)=>!message.sent);  
  const inbox = inboxMessages.map((message)=> {
    //search through messages using filter
    if (filter && message.subject.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
      return;
    }
    return <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      key={message.id}
      >
      <div className="ms-2 me-auto d-flex col-11">
        <div className="col-4 fs-5">{message.sender}</div>
        <div className="fw-bold col-4">{message.subject}</div>
        <div className="col-4 text-muted fs-6"><em>{message.datestamp}</em></div>
      </div>
      
      <Badge bg="primary" pill>
        {message.read ? "": "Unread"}
      </Badge>
    </ListGroup.Item> 
  })
  return (
    <ListGroup as="ul">
      {inbox}
    </ListGroup>
  )
}
