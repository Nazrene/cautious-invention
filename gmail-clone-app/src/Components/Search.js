import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Search({filterText, setFilterText}) {
  function handleSearchInput(e){
    const input = e.target.value;
    setFilterText(input);
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>group1@gmail.com</Form.Label>
        <Form.Control type="text" placeholder="Search" value={filterText} onChange={handleSearchInput} />
        <Form.Text className="text-muted">
          Search mails here.
        </Form.Text>
      </Form.Group>
    </Form>    
  )

}
