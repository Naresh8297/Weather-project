import React from "react";
import Hoc from "./Hoc";
const B=(a)=>{
    console.log(a)
   
    return(
        <div>
            {a.data} <br />
            <button onMouseOver={a.func}>INCREMENT</button><br />
            </div>
    )
}
export default Hoc(B)