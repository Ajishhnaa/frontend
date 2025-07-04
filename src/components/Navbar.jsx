import { AppBar, Button, TextField, Toolbar } from '@mui/material'

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  var navigate=useNavigate()
  const goToProducts=()=>{

        navigate("/navbar")
    }
    const goToHomes=()=>{

        navigate("/home")
    }
    const goToCarts=()=>{

        navigate("/cart")
    }
  return (
    <div>
        
        
      <AppBar
        style={{ backgroundColor: '#2e2e2e' }}>
        <Toolbar>
            <h3>myApp</h3>&nbsp;&nbsp;
            <Link to="/home"style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="contained" color="#A3D3DC" onClick={()=>{goToHomes()}}>Home</Button>&nbsp;&nbsp;
            </Link>

            <Link to="/products"style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="contained" color="#A3D3DC" onClick={()=>{goToProducts()}}>Products</Button>&nbsp;&nbsp;
            </Link>

            <Link to="/cart"style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button variant="contained" color="#A3D3DC" onClick={()=>{goToCarts()}}>Cart</Button>&nbsp;&nbsp;
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar