import {useRef} from"react"
const Reference=()=>{
    let demoRef=useRef()
    let btn=()=>{
        demoRef.current.style.background="green"
        demoRef.current.style.color="blue"



    }
    return(
        <div>
            <h1 ref={demoRef}>Reference</h1>
            <button onClick={btn}>Change color</button>
        </div>
    )
}
export default Reference