import React from "react";
import {useState} from "react";



export default function Timer(props){
   
    const [seconds, setSeconds] = useState(0);
    

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div class="timer" style={props.eye}>
            <h2>{seconds}</h2>
        </div>
    );

}