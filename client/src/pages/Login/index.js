import {
  Container,
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from "@mui/material";

const Login = () => {
  const submitForm = () => {
    console.log('Form submitted')
  }
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item xs={8} md={6} lg={6}
        >
          <Typography
            variant="h3"
            component="h3"
            align="center"
            gutterBottom
          >
            Welcome to Generic Business Ltd
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
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
            />
            <Button 
              onClick={submitForm}
              variant="contained"
            >
             Submit
            </Button>
          </Box>
          
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login;