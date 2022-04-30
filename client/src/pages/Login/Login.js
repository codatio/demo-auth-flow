import {
  Button,
  TextField,
  Card,
  Typography
} from "@mui/material";
import './login.css'

const Login = () => {
  const submitForm = () => {
    console.log('Form submitted')
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
            onClick={submitForm}
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login;