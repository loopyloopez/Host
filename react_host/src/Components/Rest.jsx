import React from "react";
import FontDesk from "./frontDesk";
import Arows from "./Arows";
import Brows from "./Brows";
import Erows from "./Erows";
import Drows from "./Drows";

function Rest() {
    return(
        <div id="restArea">
           
            <Arows/>
            <Brows/>
            <Erows/>
            <Drows/>
            <FontDesk/>
        </div>
    )
}



export default Rest;