import { useMemo, useState } from "react"

var Perform=()=>{
    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)
    let incre1=()=>{
        setCount1(count1+1)
    }
    let incre2=()=>{
        setCount2(count2+1)
    }
    let Even=useMemo(()=>{
        let i=0
        while (i<1000000000) i++
        return count1%2==0
    },[count1] )
    return(
        <div>
            {count1}
            <button onClick={incre1}>Count1 Increment</button> <br />
            {Even? "Even":"Odd"} <br />
            {count2}
            <button onClick={incre2}>Count2 Increment</button> 
        </div>
    )
}
export default Perform