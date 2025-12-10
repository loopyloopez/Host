
import './App.css';
import React from 'react';
//import Table from './Components/tables';
import FrontDesk from './Components/frontDesk';
import Drows from './Components/Drows';
import Arows from './Components/Arows';
import Brows from './Components/Brows';
function App() {
  return (
    <div>
      <Brows />
      <Drows />
      <Arows />
      <FrontDesk />
    </div>
  );
   
}

export default App;
