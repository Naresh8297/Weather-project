import { useState } from "react"

let Nare=()=>{
    let Task4=[{name:"hara"},
             {name:"naresh"}]
    let [data,setData]=useState(Task4)
    return(
        <div>
       {data.map((x)=>{
        return(
            <h1>{x.name}</h1>
        )
       }

       )}
        </div>
    )
}
export default Nare
