import{Fragment, useState} from "react"
import Statearry from "./data.json"
const Task3=()=>{
    let[data,setData]=useState(Statearry)
    return(
        <div>
            {data.map((x)=>{
            return(
                <Fragment key={x.id}>
                <h1>{x.login}</h1>
                <img src={x.avatar_url} alt="" />
                
                </Fragment>
               
            ) }
            )
}
        </div>
    )
}
export default Task3