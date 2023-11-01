import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Starred({messages}) {
  const starredMessages = messages.filter((message)=> message.starred);
  const starred = starredMessages.map((message)=>
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
    >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{message.subject}</div>
      <p>{message.sender}</p>
      <em>{message.datestamp}</em>
    </div>
    <Badge bg="primary" pill>
      14
    </Badge>
    </ListGroup.Item>   
  )
  return (
    <ListGroup as="ol" numbered>
      {starred}
    </ListGroup>  
  )
}
