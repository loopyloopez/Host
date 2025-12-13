import React from "react";
import FontDesk from "./frontDesk";
import Arows from "./Arows";
import Brows from "./Brows";
import Erows from "./Erows";
import Drows from "./Drows";
import Crows from "./Crows";

function Rest() {
    return(
        <div id="restArea">
           
            <Arows/>
            <Brows/>
            <Erows/>
            <Drows/>
            <Crows/>
            <FontDesk/>
        </div>
    )
}



export default Rest;