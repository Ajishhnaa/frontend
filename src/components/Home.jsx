import React from 'react'
import Navbar from './Navbar'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

const Home = () => {
  return (
    <div
    style={{
        backgroundImage: "url('/img5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflowX: "hidden"
        
      }}>

        <Navbar/>
      <br /><br /><br /><br /><br />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <SearchIcon/>
        <TextField 
        style={{background: "rgba(0, 0, 0, 0.6)",
               borderRadius: "20px",
               width: "350px"
        }}
        label="Explore" variant ="outlined" color='black'/>
        </div>
    </div>
  )
}

export default Home