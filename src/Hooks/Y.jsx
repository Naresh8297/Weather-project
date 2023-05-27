import { useContext } from "react"
import {userData} from '../App'
var Y=()=>{
    let user=useContext(userData)
    return(
        <div>
    {user} GOOD MORNING
        </div>
    )
}
export default Y