import { useRef } from "react"

var Task4=()=>{
    let num1=useRef()
    let num2=useRef()
    let add=(e)=>{
        e.preventDefault()
        let a=Number(num1.current.value)
        let b=Number(num2.current.value)
        console.log(a+b)
    }
    let sub=(e)=>{
        e.preventDefault()
        let a=num1.current.value
        let b=num2.current.value
        console.log(a-b)
    }
    let multi=(e)=>{
        e.preventDefault()
        let a=num1.current.value
        let b=num2.current.value
        console.log(a*b)
    }

    return(
        <div>
            <form action="">
                <label htmlFor="">Enter first Number</label>
                <input type="number" ref={num1}  /><br />
                <label htmlFor="">Enter second number</label>
                <input type="number" ref={num2} /><br />
                <button onClick={add}>+</button>
               <button onClick={sub}>-</button>
               <button onClick={multi}>*</button>

            </form>
        </div>
    )
}
export default Task4