import React from 'react'
import { Form,Button } from 'react-bootstrap'

function Filters() {
  return (
    <div className='filters'>
    <span className='title' >Fillter Products</span>
    <span>
    <Form.Check
    inline
    label="Ascending"
    name='groupl'
    type='radio'
    id={`inline-1`}
    />
    </span>
    <span>
    <Form.Check
    inline
    label="Descending"
    name='groupl'
    type='radio'
    id={`inline-2`}
    />
    </span>
    <span>
    <Form.Check
    inline
    label="Include Out of Stock"
    name='groupl'
    type='checkbox'
    id={`inline-3`}
    />
    </span>
    <span>
    <Form.Check
    inline
    label="Fast Deliver Only"
    name='groupl'
    type='checkbox'
    id={`inline-1`}
    />
    </span>
  {/* <span>
    <label style={{paddingRight : 10 }}>Rating: </label>
    <Rating rating = {btRating} style = {{cursor : 'pointer'}} />
  </span> */}
    <Button varient='linght'>Clear Filters</Button>
    </div>
  )
}

export default Filters