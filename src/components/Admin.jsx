import { AppBar, Button, TextField, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div
    style={{
        backgroundImage: "url('/img1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  padding: 0,
  overflowX: "hidden"
      }}
      >

      <AppBar
        style={{ backgroundColor: '#2e2e2e' }}>
        <Toolbar>
            <h3>myApp</h3>&nbsp;&nbsp;
            <Link to="/productmgmt" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="contained" color="#A3D3DC">Product Management</Button>&nbsp;&nbsp;
            </Link>
            <Button variant="contained" color="#A3D3DC">View Order</Button>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>

      
    </div>
  )
}

export default Admin