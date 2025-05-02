import { Box, Button, Typography } from '@mui/material';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

export default function App() {
  const login = () => {
    window.location.href = "/login";
  }
  const signup = () => {
    window.location.href = "/signup";
  }
  return (
    // TODO Make the homepage lol
    <div>
      <Header/>
      <Box height={'84vh'}>
        <Typography>Welcome to Hire for Baby!</Typography> 
        <Button onClick={() => login()}>Log In</Button>
        <Button onClick={()=> signup()}>Sign Up</Button>
      </Box>
      <Footer/>
    </div>
    
  );
}
