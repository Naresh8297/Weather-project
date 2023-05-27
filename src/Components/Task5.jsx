import { useState } from "react"

let Task5=()=>{
    let [number1,setNumber1]=useState()
    let number1Data=(e)=>{
        setNumber1(e.target.value)
    }
    let [number2,setNumber2]=useState()
    let number2Data=(e)=>{
        setNumber2(e.target.value)
    }
    let a=Number(number1)
    let b=Number(number2)

    let add=(e)=>
    {e.preventDefault()
        console.log(a+b)
    }
    let sub=(e)=>
    {e.preventDefault()
        console.log(a-b)
    }
    let multi=(e)=>
    {e.preventDefault()
        console.log(a*b)
    }
    return(
        <div>
          <form action="">
            <label htmlFor="">Enter First number</label>
            <input type="number" value={number1} onChange={number1Data} /><br />
            <label htmlFor="">Enter Second number</label>
            <input type="number" value={number2}  onChange={number2Data}/><br />
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={multi}>*</button>
          </form>
        </div>
    )
}
 export default Task5