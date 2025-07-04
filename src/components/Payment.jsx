import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Payment = () => {

    var navigate=useNavigate()
    
        const goToFees=()=>{
    
            navigate("/navbar")
        }
    

  return (
        <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "black",
        backgroundImage: "url('/img6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        paddingLeft:"600px",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          background: "rgb(229, 220, 220)",
          padding: "40px",
          borderRadius: "20px", 
          // textAlign: "center"
        }}
      >
        <br /><br /><br /><br />
      <TextField label="Name" variant ="outlined"/>&nbsp;&nbsp;&nbsp;
      <TextField label="10 digit mobile number" variant ="outlined"/> <br /><br />
      <TextField label="Pincode" variant ="outlined"/>&nbsp;&nbsp;&nbsp;
      <TextField label="Locality" variant ="outlined"/> <br /><br />
      <TextField label="Address" variant ="outlined" style={{ width: '450px' }}/> <br /><br />
      <TextField label="City/District/Town" variant ="outlined"/>&nbsp;&nbsp;&nbsp;
      <TextField label="State" variant ="outlined"/> <br /><br />
      <TextField label="Landmark" variant ="outlined"/> &nbsp;&nbsp;&nbsp;
      <TextField label="Alternate phone number" variant ="outlined"/> <br /><br />

       <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Home Address" />
        <FormControlLabel value="male" control={<Radio />} label="Work Address" />
        
      </RadioGroup>
      </FormControl>
        <Link to="/fees">
      <Button variant ="contained" color='primary' onClick={()=>{goToFees()}}>Deliver Here</Button>
      </Link>
    </div>
   </div>
  )
}

export default Payment