import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Fees = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert('Payment confirmed');
  };

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
        paddingLeft:"650px",
        overflowX: "hidden",
      }}
        ><Grid >
          
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h3">Payment Method</Typography>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  label="Payment Method"
                >
                  <MenuItem value="Credit Card">Credit Card</MenuItem>
                  <MenuItem value="Gpay">Gpay</MenuItem>
                  <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
                </Select>
              </FormControl>
              {paymentMethod === 'Credit Card' && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Card Number"
                    fullWidth
                    margin="normal"
                    placeholder="1234 5678 9012 3456"
                
                  />
                  <TextField
                    label="Expiry Date"
                    fullWidth
                    margin="normal"
                    placeholder="MM/YY"
            
                  />
                  <TextField
                    label="CVV"
                    fullWidth
                    margin="normal"
                    placeholder="123"
                    
                  />
                </Box>
              )}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handlePayment}
              >
                Confirm Payment
              </Button>
            </CardContent>
          </Card>
        </Grid></div>
  )
}

export default Fees