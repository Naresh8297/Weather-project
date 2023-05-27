import{Component} from "react"
class Statecls extends Component{
    constructor(){
        super()
        this.state={
            data:"HI"
        }
    }
    changeData=()=>{
        this.setState({
            data:"HELLO"
        }

        )
    }
    render(){
        return(
            <div>
                {this.state.data}
                <button onClick={this.changeData}>Click</button>
            </div>
        )
    }
}
export default Statecls