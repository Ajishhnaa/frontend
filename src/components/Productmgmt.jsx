import { Button, TextField } from '@mui/material'
import React from 'react'

const Productmgmt = () => {
  return (
    <div>
        <br /><br /><br />
      <TextField label="Title" variant ="outlined"/> <br /><br />
      <TextField label="Category" variant ="outlined"/> <br /><br />
      <TextField label="Price" variant ="outlined"/> <br /><br />
      <TextField label="Image" variant ="outlined"/> <br /><br />
      <Button variant ="outlined">Add</Button>
    </div>
  )
}

export default Productmgmt