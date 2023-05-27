import React, {useState } from 'react'
import style from './registration.module.css'
// import {Icon} from 'react-icons-kit'
// import {eyeOff} from 'react-icons-kit/feather/eyeOff'
// import {eye} from 'react-icons-kit/feather/eye'


const Registrationform = () => {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [country,setCountry] = useState("")
  let [number,setNumber] = useState("")
  let [cpassword,setCpassword] = useState('')
  // let [icon,setIcon]=useState(eye)
  let [checkbox,setCheckbox] = useState("")
  let [errors,setErrors] = useState({
    name:'',
    email:'',
    country:'',
    number:'',
    cpassword:'',
    checkbox:''
  });
  // let [cerror,setCerror] = useState("")
  


        let nameData=(e)=>{
            setName(e.target.value)
          

        }
        let emailData=(e)=>{
          setEmail(e.target.value)
        }
        let countryData=(e)=>{
          setCountry(e.target.value)
        }
        let numberData=(e)=>{
          setNumber(e.target.value)
        }
        let passwordData=(e)=>{
          setCpassword(e.target.value)
        }
        let checkData=(e)=>{
          setCheckbox(e.target.checked)
         
        }

        let submit=(e)=>{
          e.preventDefault()
          console.log(name,email,country,number,cpassword)

          let errors = {};
          /* name */
          if (name===''){
            errors.name = "name can't be empty"
          }else if (!/^[A-Za-z\s]*$/.test(name)){ 
            errors.name = "name must be in alphabets"
          }
          /* email */
          if (email.trim()===''){
            errors.email = "email can't be empty"
          }else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is not valid";
          }
          /* email */
          if (country.trim()===''){
            errors.country = "country can't be empty"
          }else if (!/^[a-zA-Z]*$/.test(country)){
            errors.country = "name must be in alphabets"
          }/* number */
          if (number.trim()===''){
            errors.number = "number can't be empty"
          } else if (!/^[0-9]{10}$/.test(number)) {
            errors.number = "number should be 10 digits";
          }
          /* password */
          if (cpassword.trim()===''){
            errors.cpassword = "password can't be empty"
          } else if (cpassword.length < 8) {
            errors.cpassword = "Password should be at least 8 characters long";
          }
          /* checkbox */
          if (!checkbox){
            errors.checkbox = "accept the terms & conditions"
          }

          if (Object.keys(errors).length > 0) {
            setErrors(errors);
          } else {
            // submit the form
          }
        }
       
        // const handlepass =()=>{
          // console.log(e)
          if (cpassword === 'password'){
            // setIcon(eye)
            setCpassword('text')
          }
          else{
            // setIcon(eyeOff)
            setCpassword('password')
          }
        // }

        
  return (
    <div id={style.form}>
        <form action=''>
            <h1> Registration form</h1>
            <div>
            <tr>
            
            <td><input type="text"  value={name} placeholder='Enter your name' onChange={nameData}/></td>
            
            {errors.name && <small>{errors.name}</small>}
            </tr>
            
            <tr>
            <td><input type="email"  value={email} placeholder='Enter your Email' onChange={emailData}/></td>
            {errors.email && <small>{errors.email}</small>}
            </tr>
            <tr>
                
            <td><input type="text" value={country} placeholder='Enter your Country' onChange={countryData}/></td>
            {errors.country && <small>{errors.country}</small>}
            </tr>
            <tr>
            <td><input type="text"  value={number} placeholder='Enter your number' onChange={numberData}/></td>
            {errors.number && <small>{errors.number}</small>}
            </tr>
            <tr>
              
            <td><input type={cpassword }  placeholder='Enter your password'  onChange={passwordData}/>
            {/* <span onClick={handlepass} ><Icon icon={icon}/></span> */}

            </td>
            {errors.cpassword && <small>{errors.cpassword}</small>}
            </tr>
            {/* terms */}
            <div id={style.check}><input type="checkbox"  value={checkbox} onChange={checkData}/>
            
            <p>I accept terms & conditions</p></div>
            </div>
            {errors.checkbox && <small>{errors.checkbox}</small>}
            {/* button */}
            <button onClick={submit}>Create Account</button>

           <p id={style.sign}>already have an account? <strong>sign in</strong></p>
        </form>
    </div>
  )
}

export default Registrationform