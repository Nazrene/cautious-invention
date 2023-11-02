import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Compose({handleNewMail}) {
  const [newMail, setNewMail] = useState({
    sender: "group1@gmail.com",
    recipient: "",
    subject: "",
    body: "",
    datestamp: "",
    archived: false,
    sent: true,
    starred: false
  })
  function handleFormData (e) {
    const key = e.target.id;
    //console.log(key)
    const value = e.target.value;
    const formData = {
      ...newMail,
      [key]: value,
      datestamp: new Date().toDateString()
    }
    setNewMail(formData)
  }

  function handleSubmit(e) {
    e.preventDefault();
    //post new mail to db.json
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMail)
    })
    .then(r => r.json())
    .then((email) => {
      handleNewMail(email);
      //reset the input field
      setNewMail(
        {
          sender: "group1@gmail.com",
          recipient: "",
          subject: "",
          body: "",
          datestamp: "",
          archived: false,
          sent: true,
          starred: false
        }
      )
    })
  }

  return (
    <Form onSubmit={handleSubmit} className='bg-light p-2 rounded'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary fw-bold">Email address</Form.Label>
        <Form.Control type="email" className='text-muted' value={newMail.sender} onChange={handleFormData} id='sender' required/>
        <Form.Text className="text-warning">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary fw-bold"> Recipient's Email address</Form.Label>
        <Form.Control type="email" placeholder="enter email" value={newMail.recipient} onChange={handleFormData} id='recipient' required/>
        <Form.Text className="text-warning">
          Recipient's email
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary fw-bold">RE:</Form.Label>
        <Form.Control type="text" placeholder="enter subject" value={newMail.subject} onChange={handleFormData} id='subject' required/>
        <Form.Text className="text-warning">
          Your subject goes here..
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary fw-bold">Body</Form.Label>
        <Form.Control style={{height: "200px"}} type="text" as="textarea" placeholder="type message here" value={newMail.body} onChange={handleFormData} id='body' required/>
        <Form.Text className="text-warning">
          Your mail goes here..
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  )
}
