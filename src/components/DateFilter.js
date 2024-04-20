import React from 'react';
import { Form } from 'react-bootstrap';

// Gives the date value
function DateFilter({ onDateChange }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Select Date:</Form.Label>
        <Form.Control type="date" onChange={e => onDateChange(e.target.value)} />
      </Form.Group>
    </Form>
  );
}

export default DateFilter;
