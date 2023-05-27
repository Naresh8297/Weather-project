const Theme=()=>{
    let dark=()=>{
        document.body.style.background="Black"
        document.body.style.color="White"
    }
    let light=()=>{
        document.body.style.background="Pink"
        document.body.style.color="Black"
    }

    return(
        <div>
            DARK 
            <input type="radio" name="a" onClick={dark} />
            LIGHT  
            <input type="radio" name="a" onClick={light} />
            <h1>DARK & LIGHT THEME</h1>

        </div>
    )
}
export default Theme