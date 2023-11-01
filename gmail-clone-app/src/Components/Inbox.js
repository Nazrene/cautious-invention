import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Inbox({messages}) {
  //display received messages
  const inboxMessages = messages.filter((message)=>!message.sent);
  const inbox = inboxMessages.map((message)=>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      >
      <div className="ms-2 me-auto">
        <div>{message.sender}</div>
        <div className="fw-bold">{message.subject}</div>
        <em>{message.datestamp}</em>
      </div>
      <Badge bg="primary" pill>
        {message.read ? "": "Unread"}
      </Badge>
    </ListGroup.Item> 
  )
  return (
    <ListGroup as="ul">
      {inbox}
    </ListGroup>
  )
}
