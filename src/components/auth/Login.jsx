import { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    FormControlLabel,
    Checkbox,
    Grid,
    Link,
    useTheme // Import useTheme hook
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: theme.spacing(3),
        marginTop: theme.spacing(4),
    },
}));

const Login = () => {
    const theme = useTheme(); 
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);
    // const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("login");
    };

    return (
        <Container component="main" maxWidth="lg" sx={{ py: 4 }}>
            <StyledPaper elevation={3}>
                {/* Left Side - Welcome Content */}
                <Box sx={{
                    flex: 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                    [theme.breakpoints.down('md')]: {
                        borderRight: 'none',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        paddingBottom: theme.spacing(4),
                        marginBottom: theme.spacing(4),
                    },
                }}>
                    <Typography variant="h4" component="h1" sx={{ 
                        fontWeight: 'bold',
                        color: 'primary.main',
                        mb: 1
                    }}>
                        WELCOME TO
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ 
                        fontWeight: 'bold',
                        color: 'primary.main',
                        mb: 3
                    }}>
                        HEXAGON DESIGN & ENGINEERING
                    </Typography>
                    <Typography variant="h5" component="h3" sx={{ 
                        fontWeight: 'medium',
                        mb: 3
                    }}>
                        User Conference India 2025
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ 
                        fontStyle: 'italic',
                        mb: 2
                    }}>
                        Simulating Reality, Delivering Certainty
                    </Typography>
                </Box>

                {/* Right Side - Login Form */}
                <Box sx={{
                    flex: 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.down('md')]: {
                        padding: theme.spacing(2),
                    },
                }}>
                    <Typography variant="h5" component="h4" sx={{ 
                        fontWeight: 'bold',
                        mb: 3,
                        textAlign: 'center'
                    }}>
                        Login
                    </Typography>

                    {/* {error && (
                        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                            {error}
                        </Alert>
                    )} */}

                    <Box 
                        component="form" 
                        onSubmit={handleSubmit} 
                        sx={{ 
                            width: '100%',
                            '& .MuiTextField-root': { mb: 2 }
                        }}
                    >
                        <TextField
                            required
                            fullWidth
                            label="Email Address *"
                            autoComplete="email"
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontSize: '0.875rem',
                                }
                            }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontSize: '0.875rem',
                                }
                            }}
                        />
                        <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            color="primary"
                                            size="small"
                                        />
                                    }
                                    label="Remember me"
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontSize: '0.875rem',
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ 
                                mt: 1,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            LOGIN
                        </Button>
                    </Box>
                </Box>
            </StyledPaper>
        </Container>
    );
};

export default Login;