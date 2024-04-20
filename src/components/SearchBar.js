import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

// Finds tasks within the page it's on
function SearchBar({ onSearch }) {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => onSearch(e.target.value)} />
    </Form>
  );
}

export default SearchBar;
