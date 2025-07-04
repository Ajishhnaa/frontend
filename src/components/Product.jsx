import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Product = () => {

  var navigate=useNavigate()
    var[use,setUse]=useState([])
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setUse(res.data)
            console.log(use)
        })

        const goToPaymentPage=()=>{

        navigate("/payment")
    }
  return (
    <div
        style ={{
        backgroundImage: "url('/img6.png')"}}>

        <Navbar/>
        <br /><br /><br /><br /><br /><br /><br /><br />
   <Grid container spacing={2} style={{ padding: '70px', boxSizing: 'border-box' }}>
            
                            

        {use.map((val)=>{
                        return(
                            <Grid item xs={12} sm={6} md={4} lg={3}>
    
      <Card style={{
        width: '100%',    // ✅ Makes card fill available grid column
        maxWidth: '300px', // ✅ Optional: cap max width
        margin: 'auto',    // ✅ Center it if column wider
        height: '400px',     // Same height for all
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0px',
        boxSizing: 'border-box'
      }}>
      <CardMedia
        sx={{ height: 200 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography  variant="h5">
          {val.title}
        </Typography>
        <Typography >
          {val.category}
        </Typography>
         <Typography gutterBottom variant="h5" component="div">
          Rs {val.price}/-
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/payment">
        <Button variant='contained'size="small" color='primary' style={{ marginRight: '40px',marginLeft:'20px'}}onClick={()=>{goToPaymentPage()}}>Buy Now</Button>
        </Link>
        <Button size="small" variant='contained' color='primary'>Add to cart</Button>
      </CardActions>
    </Card>
    
                  
                     </Grid>

   
                        )
        })}
         </Grid>
    </div>
  )
}

export default Product