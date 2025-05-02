import { Box, Button, Typography } from '@mui/material';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate()
  return (
    // TODO Make the homepage lol
    <div>
      <Header/>
      <Box height={'84vh'}>
        <Typography>Welcome to Hire for Baby!</Typography> 
        <Button onClick={()=>navigate("/login")}>Log In</Button>
        <Button onClick={()=>navigate("/signup")}>Sign Up</Button>
      </Box>
      <Footer/>
    </div>
    
  );
}
