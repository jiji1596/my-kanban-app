import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from '@mui/material/styles';
import "./App.css";

function App() {
  return (
    <>
       <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
    </>
  );
}

export default App;
