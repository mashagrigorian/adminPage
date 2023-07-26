import { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/base";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = loginValue;
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{}}>
        <Typography variant="h5">Sign in</Typography>

        <Box
          component="form"
          sx={{
            display: "grid",
            gap: "20px",
          }}
        >
          <div>
            <TextField
              fullWidth
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Button variant="contained" onClick={handleLogin} fullWidth>
              Login
            </Button>
          </div>

          <div>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              fullWidth
            >
              Register
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
