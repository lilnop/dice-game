import React,{Component} from "react";

class Die extends Component{
    render(){
        return(
            <div className="">
                <i className={`fas fa-dice-${this.props.face}`} />
            </div>
        )
    }
}

export default Die;