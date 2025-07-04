import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      alert(`Welcome, ${foundUser.role}!`);
      if (foundUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } else {
      alert("Invalid credentials.");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "black",
        backgroundImage: "url('/ha.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        paddingLeft:"200px",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          // background: "rgba(0, 0, 0, 0.6)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 30px #00f2ff",
          width: "350px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#fff", fontSize: "18px", marginBottom: "20px" }}>
          Welcome, please login to continue
        </p>

        <TextField
          label="Username or Email"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#00f2ff" } }}
          InputProps={{
            style: { color: "#fff", borderColor: "#00f2ff" },
          }}
          sx={{
            input: { color: "white" },
            fieldset: { borderColor: "#00f2ff" },
            marginBottom: "20px",
          }}
          onChange={e => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: "#00f2ff" } }}
          InputProps={{
            style: { color: "#fff", borderColor: "#00f2ff" },
          }}
          sx={{
            input: { color: "white" },
            fieldset: { borderColor: "#00f2ff" },
            marginBottom: "20px",
          }}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={handleLogin}
          style={{
            backgroundColor: "#00f2ff",
            color: "black",
            fontWeight: "bold",
            borderRadius: "30px",
            width: "100%",
            marginBottom: "15px",
          }}
        >
          Login
        </Button>

        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#00f2ff",
              color: "black",
              fontWeight: "bold",
              borderRadius: "30px",
              width: "100%",
            }}
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Login
