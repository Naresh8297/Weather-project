import { useState } from "react"

let Task2=()=>{
    let[count,setCount]=useState(0)
    let incre=()=>{setCount(count+1)}
return(
    <div>
        <h1>
        <i class="fa-solid fa-heart" onClick={incre}></i><sup>{count}</sup>
        
        </h1>


    </div>
)
}

export default Task2