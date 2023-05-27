import { useEffect, useState } from "react"

const Useeffect=()=>{
    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(5)
    useEffect(()=>{
        console.log("HELLO I AM USE EFFECT")
    },[])
    let incre=()=>{
        setCount(count+1)
    }
    let incre1=()=>{
        setCount1(count1+5)
    }
    return(
        <div>
            {count} <br />
            <button onClick={incre}>INCREMENT</button>
            <button onClick={incre1}>INCREMENT</button>
        </div>
    )
}
export default Useeffect