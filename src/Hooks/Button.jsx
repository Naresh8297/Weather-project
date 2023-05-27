import React from'react'
var Button=(z)=>{
    console.log(z)
    return(
        <div>
      <button onClick={z.Func}>{z.children}</button>
        </div>
    )
}
export default React.memo(Button)