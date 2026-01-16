import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { socket } from "../socket";

export default function Table(props) {
  const [voltage, setVoltage] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [powerColor, setPowerColor] = useState('green');
  const [tableColor, setTableColor] = useState("#2B1717");
  const voltageStyle={
    color:powerColor
  }
  const eyes = {
    visibility: isHidden ? "hidden" : "visible",
  };

  /* ✅ SINGLE TIMER */
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ✅ SOCKET LISTENER WITH CLEANUP */
  useEffect(() => {
    const onFoo = (data) => {
    
      if (data.table === props.label) {
        
        let currentVoltage=data.voltage;
        setVoltage(currentVoltage);
        let numVoltage=parseFloat(currentVoltage);
        if(numVoltage > 2.7){
        setPowerColor('green')
        }
        else if(numVoltage < 3 && numVoltage > 2.5){
          setPowerColor('yellow')
        }
        else{
          setPowerColor('red')
        }
        if (isHidden) {
          setTableColor("#450B00");
          setIsHidden(false);
          setSeconds(0);
         // console.log("approve to run this");
        } else {
         // console.log("not approved to run this");
        }
      }
    };

    socket.on("foo", onFoo);

    return () => {
      socket.off("foo", onFoo);
    };
  }, [props.label, isHidden]);

  const tableStyle = {
    width: props.width || 150,
    height: props.height || 100,
    backgroundColor: tableColor,
  };

  return (
    <div>
      <h1 className="tableText">{props.label}</h1>

      <div className={`tables ${props.class}`}>
        <button
          className={props.section}
          onClick={() => {
            setTableColor("#2B1717");
            setIsHidden(true);
          }}
        >
          <ThemeProvider
            theme={{
              palette: {
                primary: {
                  main: tableColor,
                },
              },
            }}
          >
            <div style={tableStyle} className="insideBox">
              <h4 style={voltageStyle}>Power:{parseInt((125*voltage)-350)}% or {voltage}V</h4>
              <div className="timer" style={eyes}>
                <h2>{seconds}</h2>
              </div>
            </div>
          </ThemeProvider>
        </button>
      </div>
    </div>
  );
}



