import { useRef } from "react"

let Uncontrolled1=()=>{
    let name=useRef()
    let salary=useRef()
    let company=useRef()
   

    let formHandle=(e)=>{
        e.preventDefault()
        let nameData=name.current.value
        let salaryData=salary.current.value
        let companyData=company.current.value
        console.log(nameData, salaryData, companyData)

    }
    return(
        <div>
            <form action="">
                <label htmlFor="">NAME</label>
                <input type="text" ref={name} /><br />
                <label htmlFor="">SALARY</label>
                <input type="text" ref={salary} /><br />
                <label htmlFor="">COMPANY</label>
                <input type="text" ref={company} /><br />
              <input type="SUBMIT" onClick={formHandle} />

            </form>
        </div>
    )
}
export default Uncontrolled1