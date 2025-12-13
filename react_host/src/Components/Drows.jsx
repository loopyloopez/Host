import React from "react";
import Table from "./tables.jsx";

function Drows() {
  return (
    <div id="D_rows">
    <Table class="Dtables" label="D7" width={100} section="D" />
   <Table class="Dtables" label="D6" width={100} section="D" />
   <Table class="Dtables" label="D5" width={100} section="D" />
   <Table class="Dtables" label="D4" width={100} section="D" />
    <Table class="Dtables" label="D3" width={100} section="D" />
    <Table class="Dtables" label="D2" width={100} section="D" />
    <Table class="Dtables" label="D1" width={100} section="D" />
    </div>
  );
}




export default Drows;