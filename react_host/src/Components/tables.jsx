import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { socket } from "../socket";

export default function Table(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [tableColor, setTableColor] = useState("#2B1717");

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
      if (data === props.label) {
        if (isHidden) {
          setTableColor("#450B00");
          setIsHidden(false);
          setSeconds(0);
          console.log("approve to run this");
        } else {
          console.log("not approved to run this");
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



