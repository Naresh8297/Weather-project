import React from'react'
let Count=(x)=>{
    console.log()
    return(
        <div>
        {x.children}:{x.data}

        </div>
    )
}
export default React.memo(Count)