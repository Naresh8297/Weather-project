import { useRef } from "react"

const Uncontrolled=()=>{
    let name=useRef()
    let email=useRef()
    let phoneno=useRef()
        console.log(name)
        console.log(email)
        console.log(phoneno)
        let formHandle=(e)=>{
            e.preventDefault()
            let nameData=name.current.value
            let emailData=email.current.value
            let phonenoData=phoneno.current.value
            document.write(nameData, emailData, phonenoData)

        }
    
    return(
        <div>
            <form action="">
                <label htmlFor="">NAME</label>
                <input type="text" ref={name} /><br />
                <label htmlFor="">EMAIL</label>
                <input type="text" ref={email} /><br />
                <label htmlFor="">PHONENO</label>
                <input type="text"ref={phoneno}/><br />
              <input type="SUBMIT"onClick={formHandle}/>

            </form>
        </div>
    )
}
export default Uncontrolled