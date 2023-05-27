import { useState } from "react"

let Controlled=()=>{
    let [name,setName]=useState("")
    let nameData=(e)=>{
        setName(e.target.value)
    }
     let [email,setemail]=useState("")
    let emailData=(e)=>{
        setemail(e.target.value)
    }
    let [salary,setsalary]=useState("")
    let salaryData=(e)=>{
        setsalary(e.target.value)
    }

    let btn=(e)=>{
        e.preventDefault()
        console.log(name, email,salary)
    }
 
    return(
        <div>
            <form action="">
                <label htmlFor="">NAME:</label>
                <input type="text" value={name} onChange={nameData} /><br />
                 <label htmlFor="">EMAIL:</label>
                <input type="text" value={email} onChange={emailData} /><br />
                <label htmlFor="">SALARY:</label>
                <input type="text" value={salary} onChange={salaryData} /><br />

                <button onClick={btn}>SUBMIT</button>
            </form>
        </div>
    )
}
export default Controlled
