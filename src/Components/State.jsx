import {useState} from "react"
const State=()=>{
    let [Data,setData]=useState("I AM HUNGRY")
    let btn=()=>{
        setData("I AM FULL")
    }


    return(
        <div>
            {Data}
            <button onClick={btn}>FOOD</button>
        </div>
    )
}
export default State