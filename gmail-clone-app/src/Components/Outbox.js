import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Outbox({messages}) {
  const outboxMessages = messages.filter((message)=> message.sent);
  const outbox = outboxMessages.map((message)=>
    <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
    >
    <div className="ms-2 me-auto d-flex col-11">
      <div className="col-4 fs-5">{message.sender}</div>
      <div className="fw-bold col-4">{message.subject}</div>
      <div className="col-4 text-muted fs-6"><em>{message.datestamp}</em></div>
    </div>
    <Badge bg="primary" pill>
      14
    </Badge>
    </ListGroup.Item> 
  )
  return (
    <ListGroup as="ul">
      {outbox}
    </ListGroup>
  )
}
