import { Grid, Button, Box, TextField, Typography } from "@mui/material";
import Header from "../layout/header";
import Footer from "../layout/footer";


function Login() {

    return (
        <div>
            <Header />
            {/* center the items horizontally */}
            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} height='84vh' spacing={5} padding={5}>
                <Box maxWidth='50vh'>
                    <Typography variant='h6' color='primary' textAlign={'center'}>
                        Login to your account
                    </Typography>
                    <TextField variant="outlined" label="Email" type="email" fullWidth margin="normal" />
                    <TextField variant="outlined" label="Password" type="password" fullWidth margin="normal" />
                    <Button variant="contained" color="primary" size="large" fullWidth style={{ marginTop: '16px' }}>
                        Login
                    </Button>
                    <Button variant="outlined" color="secondary" size="large" fullWidth style={{ marginTop: '16px' }} onClick={() => window.location.href = '/signup'}>
                        Sign up now!
                    </Button>
                </Box>
            </Grid>
            <Footer />
        </div>
        
    )
}

export default Login;