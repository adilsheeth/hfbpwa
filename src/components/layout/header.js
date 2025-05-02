import Logo from '../../logo.svg';
// import { Typography } from '@mui/material';

export default function Header() {
  return (
    // TODO make the header look pretty
    <div>
        <header>
          <a href={window.location.origin + "/"}>
            <img src={Logo} alt="Logo" style={{ width: '200px', height: '10vh', display: 'block', margin: '0 auto' }} />
          </a>
        </header>
    </div>
    
  );
}