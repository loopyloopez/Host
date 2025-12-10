import React from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
function table(props) {
    let Table = ((<div className={`tables ${props.class}`} > 


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
          width: props.width?props.width:120,
          height: props.height?props.height:100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
    </div>
   
  ));
  return(
    <div>
        {Table}
    </div>
  )
}










export default table;