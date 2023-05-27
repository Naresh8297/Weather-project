import { useState } from "react"
const Ract=()=>{
    let arr=[
        {name:"HTML"},
         {name:"CSS"},
          {name:"JAVASCRIPT"}]
    let[data,setData]=useState(arr)
    return(
        <div>{ data.map((x)=>{
            return(
                <h1>
                    {x.name}
                </h1>
            )
        }
        )



            }
           

            
            
        
        </div>
    )
    

}
export default Ract