import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Search({filterText, setFilterText}) {
  function handleSearchInput(e){
    const input = e.target.value;
    setFilterText(input);
  }
  return (
    <Form className="bg-transparentp-2 mt-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" className='bg-light' placeholder="Search" value={filterText} onChange={handleSearchInput}/>
        <Form.Text className="text-white">
          Search your mails here.
        </Form.Text>
      </Form.Group>
    </Form>    
  )

}
