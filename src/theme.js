// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   typography: {
    fontFamily: 'Montserrat, Arial',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // cyan
    },
    secondary: {
      main: '#ff4081', // pink
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
