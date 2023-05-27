import React from "react";
import Hoc from "./Hoc";
const A=(x)=>{
    console.log(x);
    return(
        <div>
            {x.data} <br />
            <button onClick={x.func} >INCREMENT</button><br />
            </div>
    )
}
export default Hoc(A)