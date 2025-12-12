import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './Components/ConnectionState';
import { ConnectionManager } from './Components/ConnectionManager';
import { Events } from "./Components/Events";
import { MyForm } from './Components/MyForm';
import Rest from "./Components/Rest.jsx";

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const [text, setText] = useState("nothing");
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setText(value);
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
      <ConnectionState isConnected={ isConnected } />
      <Events events={ fooEvents } />
      <ConnectionManager />
      <MyForm />
      <h1>{text}</h1>
     
    </div>
  );
}