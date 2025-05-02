import { Grid, Button, Box, TextField, Typography } from "@mui/material";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, pwd)
        .then()
    }

    return (
        <div>
            <Header />
            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} height='84vh' spacing={5} padding={5}>
                <Box maxWidth='50vh'>

                    <Typography variant='h6' color='primary' textAlign={'center'} >
                        Login to your account
                    </Typography>

                    <TextField variant="outlined" label="Email" type="email" fullWidth margin="normal" onChange={(e)=>setEmail(e.target.value)}/>

                    <TextField variant="outlined" label="Password" type="password" fullWidth margin="normal" onChange={(e)=>setPwd(e.target.value)}/>

                    <Button variant="contained" color="primary" size="large" fullWidth style={{ marginTop: '16px' }} onClick={()=>handleLogin()}>
                        Login
                    </Button>

                    <Button variant="outlined" color="secondary" size="large" fullWidth style={{ marginTop: '16px' }} onClick={()=>navigate("/signup")}>
                        Sign up now!
                    </Button>

                </Box>
            </Grid>
            <Footer />
        </div>
        
    )
}

export default Login;