import {
  Button,
  TextField,
  Card,
  Typography
} from "@mui/material";
import './login.css'
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState('')
  
  const handleLogin = () => {
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName }),
    })
    .then((res) => res.json())
    .then(data => console.log(data))
  }

  const handleUserName = (event) => {
    const input = event.target.value;
    setUserName(input)
  }

  return (
    <div className="login-wrapper">
      <Card variant="outlined">
        <div className="login-content">
          <Typography
            variant="h3"
            component="h3"
            align="center"
          >
            Welcome to GenBus
          </Typography>
          <Typography
            align="left"
            gutterBottom
          >
            Sign in using your username and password
          </Typography>
          <TextField
            id="username-input"
            label="Username"
            variant="outlined"
            onChange={handleUserName}
          />
          <TextField
            id="password-input"
            label="Password"
            variant="outlined"
            type="password"
            gutterBottom
          />
          <Button
            className="submit-button"
            onClick={handleLogin}
            variant="contained"
            size="large"
            disabled={userName === ''}
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login;