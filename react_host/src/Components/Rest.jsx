import React from "react";
import front_desk from "./frontDesk";
import Arows from "./Arows";
import Brows from "./Brows";
import Erows from "./Erows";
import Drows from "./Drows";

function Rest() {
    return(
        <div id="restArea">
            {front_desk()}
            <Arows/>
            <Brows/>
            <Erows/>
            <Drows/>
            <front_desk/>
        </div>
    )
}



export default Rest;