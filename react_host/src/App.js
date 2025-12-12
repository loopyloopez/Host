
import './App.css';
import React from 'react';
//import Table from './Components/tables';
import FrontDesk from './Components/frontDesk';
import Drows from './Components/Drows';
import Arows from './Components/Arows';
import Brows from './Components/Brows';
import Erows from './Components/Erows';
function App() {
  return (
    <div>
      <Erows />
      <Brows />
      <Drows />
      <Arows />
      <FrontDesk />
    </div>
  );
   
}

export default App;
