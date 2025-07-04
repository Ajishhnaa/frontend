// Register.jsx
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // default role

  const handleRegister = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(user => user.username === username);

    if (userExists) {
      alert("Username already exists!");
      return;
    }

    const newUser = { username, password, role };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("User registered successfully!");
  };

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
          background: "rgba(0, 0, 0, 0.6)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 30px #00f2ff",
          width: "350px",
          textAlign: "center",
        }}
        >
      <p style={{ color: "#fff", fontSize: "18px", marginBottom: "20px" }}>
          <h1>Register</h1>
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
              /> <br /><br />

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
              /> <br /><br />

      <Button variant="contained"
        style={{
              backgroundColor: "#00f2ff",
              color: "black",
              fontWeight: "bold",
              borderRadius: "30px",
              width: "100%",
            }}
               onClick={handleRegister}>Register</Button><br /><br />

            <a  href="http://localhost:5173/"
              style={{color: "white" }}>Login here</a>
    </div>
  </div>
  );
};

export default Register;