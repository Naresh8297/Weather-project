import { useState } from "react"
import Button from "./Button"
import Count from "./Count"
import { useCallback } from "react"

const Main=()=>{
    let [age,setAge]=useState(25)
    let [salary,setSalary]=useState(25000)
    let increage=useCallback(()=>{
        setAge(age+1)

    },[age]

    )
    let incresalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
    return(
        <div>
    <Count data={age}>Age:</Count>
    <Button Func={increage}>IncreAGE</Button>
    <Count  data={salary}>Salary:</Count>
    <Button Func={incresalary}>IncreSalary</Button>
        </div>
    )
}
export default Main