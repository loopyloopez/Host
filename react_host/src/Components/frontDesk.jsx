import React from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
function front_desk() {
    let Table = ((
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#8d5501ff',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  ));
  return(
    <div id="frontDesk">
         <h1 className="tableText">Front Table</h1>
        {Table}
    </div>
  )
}



export default front_desk;