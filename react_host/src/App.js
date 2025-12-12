import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './Components/ConnectionState';
//import { ConnectionManager } from './Components/ConnectionManager';
import { Events } from "./Components/Events";
import Rest from "./Components/Rest.jsx";
import './App.css';
export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const [settingsVisibility, setSettings] = useState("visible");
  let eyes ={
    visibility: settingsVisibility,
    backgroundColor: "rgba(255, 0, 0, 0.5)"
  }
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);
  
  return (
    <div className="App">
      <div style={eyes} className="controlPanel">
          <ConnectionState isConnected={ isConnected } />
          <Events events={ fooEvents } />
      </div>
     
      <Rest/>
    
     
      
     
    </div>
  );
}