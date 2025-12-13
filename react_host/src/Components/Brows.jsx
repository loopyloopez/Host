import React from "react";
import Table from "./tables.jsx";

function Brows() {
  return (
    <div id="B_rows">
    <Table class="B_tables" width={160} color='#d896ff' label ="B1" section="B"/>
   <Table class="Btables" color='#d896ff' label="B2" section="B"/>
   <Table class="Btables" color='#d896ff' label="B3" section="B"/>
   <Table class="Btables" color='#d896ff' label="B4" section="B"/>
    <Table class="Btables" color='#d896ff' label="B5" section="B"/>
    </div>
  );
}




export default Brows;