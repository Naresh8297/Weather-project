import { useState } from "react"
const Table=()=>{
    let [Data,setData]=useState(0)
    let increment=()=>{
        setData(Data+1);
        
    }
    let decrement=()=>{
        setData(Data-1);
        
    }
    let reset=()=>{
        setData(0);
        
    }


    return(
        <div>
            {Data}
            <br />
            <button onClick={increment}>INCREMENT</button>
            <br />
            <button onClick={decrement}>DECREMENT</button>
            <br />
            <button onClick={reset}>RESET</button>
            <br />
            </div>

    )
}
export default Table