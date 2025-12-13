import React from "react";
import Table from "./tables.jsx";

function Erows() {
  return (
    <div id="E_rows">
    <Table class="Etables" height = {400} color='#ffc003' label="E1" section="E" />
    <Table class="Etables" width = {300} color='#ffc003' label="E2" section="E" />
   
    </div>
  );
}




export default Erows;