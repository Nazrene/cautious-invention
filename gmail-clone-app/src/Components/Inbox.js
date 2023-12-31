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
      className="d-flex justify-content-between align-items-start list-group-item list-group-item-light"
      key={message.id}
      >
      <div className='d-block'>
        <div><i class="bi bi-archive text-dark"></i></div> 
        <div><i class="bi bi-trash-fill text-danger"></i></div>
      </div>
      <div className="ms-2 me-auto d-flex col-10">
        <div className="col-4 fs-5">{message.sender}</div>
        <div className="fw-bold col-4">{message.subject}</div>
        <div className="col-4 text-muted fs-6"><em>{message.datestamp}</em></div>
      </div>
      <Badge bg="primary" pill>
        {message.read ? "": "Unread"}
      </Badge>
      <div className='ms-2'><i class="bi bi-star text-warning"></i></div>
    </ListGroup.Item>

  })
  return (
    <>
      <h4 className='fs-3 text-primary'>Inbox</h4>
      <ListGroup as="ul">
        {inbox}
      </ListGroup>
    </>
    
  )
}
