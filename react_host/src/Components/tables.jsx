import React from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { socket } from '/Users/ericklopez/projectHost/Host/react_host/src/socket';
import { useState} from "react";

export default function Table(props) {
     const [tableColor, setTableColor] = useState("blue");

     socket.on('foo', (data)=>{
       if(data === props.label){
            setTableColor("red");
       }
     });
    
    
    let Table = ((<div className={`tables ${props.class}`} > 
    <button onClick={()=>{setTableColor("blue")}}>

  <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: tableColor,
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

    </button>
    
   


       
    </div>
   
  ));
  return(
    <div>
        <h1 className="tableText">{props.label}</h1>
        {Table}
    </div>
  )
}










