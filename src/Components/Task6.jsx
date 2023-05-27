import { useState } from "react"

let Task6=()=>{
    let [number1,setNumber1]=useState()
    let number1Data=(e)=>{
        setNumber1(e.target.value)
    }
    let [number2,setNumber2]=useState()
    let number2Data=(e)=>{
        setNumber2(e.target.value)
    }
    let [res,setRes]=useState()
    
    
   

    let add=(e)=>
    {e.preventDefault()
        // console.log(a+b)
        let a=Number(number1)+Number(number2)
        setRes(a);
    }
    let sub=(e)=>
    {e.preventDefault()
        // console.log(a-b)
        let a=Number(number1)-Number(number2)
        setRes(number1-number2);
    }
    let multi=(e)=>
    {e.preventDefault()
        // console.log(a*b)
        setRes(number1*number2);
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
            <h2>Result:{res}</h2>
          </form>
        </div>
    )
}
 export default Task6