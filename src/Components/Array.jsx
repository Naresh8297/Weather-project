import { useState } from "react"
const Array=()=>{
    let[arr]=useState(["hai","hi","BYE"])
    return(
        <div>
        
        {arr.map((x)=>{
            return(
                <h1>{x}
                </h1>
            )
        })
        }

    
        </div>
    )
}
export default Array