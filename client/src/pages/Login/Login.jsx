import { Button, TextField, Card, Typography } from '@mui/material';
import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import { linkService } from '../../link-service';

const Login = () => {
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    linkService.login(userName).then((data) => {
      const { userId } = data;
      navigate(routes.dashboard(userId));
    });
  };

  const handleUserNameChange = (event) => {
    const input = event.target.value;
    setUserName(input);
  };

  const disabled = userName === '';

  return (
    <div className="login-wrapper">
      <Card variant="outlined" className="login-card">
        <div className="login-content">
          <Typography variant="h3" component="h3" align="center">
            Welcome to <span className="accent-text">GenBus</span>
          </Typography>
          <Typography align="left" gutterBottom>
            Sign in using your username and password
          </Typography>
          <TextField
            id="username-input"
            label="Username"
            value={userName}
            variant="outlined"
            onChange={handleUserNameChange}
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
            disabled={disabled}
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;