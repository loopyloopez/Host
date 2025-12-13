import React from "react";
//import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { socket } from '/Users/ericklopez/projectHost/Host/react_host/src/socket';
import { useState} from "react";


export default function Table(props) {
    const [isHidden, setIsHidden] = useState(true);
    let on = false;
    const eyes ={
        visibility: isHidden ? 'hidden' : 'visible'
    };
     const [seconds, setSeconds] = useState(0);
     let Timer=( <div class="timer" style={eyes}>
            <h2>{seconds}</h2>
        </div>)
    

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((lastSecond)=>{
                return lastSecond++;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
        
    
        React.useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
    
            return () => clearInterval(interval);
        }, []);
     const [tableColor, setTableColor] = useState("#2B1717");

     
     const tableStyle = {
        width: props.width || 150,
        height: props.height || 100,
        backgroundColor:tableColor,
     }
     socket.on('foo', (data)=>{
        if(!on){
            if(data === props.label){
            
            setTableColor("#450B00");
            setIsHidden(false);
            setSeconds(0);

            
          //  console.log(isHidden);
            
       }
        }
      
     });
    
    
    let Table = ((<div className={`tables ${props.class}`} > 
    <button className={props.section} onClick={()=>{setTableColor("#2B1717"); setIsHidden(true); on=false;}}>
       

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
        
      <div style={tableStyle} className="insideBox ">
        {Timer}
         
      </div>
     
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










