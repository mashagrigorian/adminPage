import { useState } from 'react';

import { 
    Box,
    Container, 
    Typography,
    TextField,
    Button
 } from '@mui/material';

const Login = () => {
    const [loginValue, setLoginValue] = useState ({
        email: "",
        password: "",
    })

    console.log(loginValue);

    const handleInputChange = (event) => {
        const {name , value } = event.target;
        setLoginValue({
            ...loginValue,
            [name]: value
        })
    }

    const handleLogin = () => {
        console.log(loginValue);
    }

    return (
        <Container maxWidth="xs">
            <Box  
                sx={{
                    margin: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography  variant="h5">
                    Sign in
                </Typography>
                
                <Box 
                    component='form'
                    sx={{
                        display: 'grid',
                        gap: '20px'
                    }}
                >
                    <div>
                        <TextField
                            name='email'
                            fullWidth
                            type="email"
                            label="Email"
                            placeholder='Email'
                            onChange={handleInputChange}
                        />
                    </div>
                   
                    <div>
                        <TextField
                            name='password'
                            fullWidth
                            type="password"
                            label="Password"
                            placeholder='Password'
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <div>
                        <Button variant="contained" onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                </Box>
            </Box>
        </Container>
    )
};

export default Login;