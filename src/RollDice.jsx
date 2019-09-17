import React,{Component} from "react";
import Die from "./Die";

class RollDice extends Component{
    static defaultProps = {
        sides:["one","two","three","four","five","six"]
    }

    constructor(props){
        super(props);

        this.state = {
            die1:"one",
            die2:"two",
            rolling:false
        }

    }

    roll = (e) => {
        let random1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let random2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        this.setState({
            die1:random1,
            die2:random2,  
            rolling:true        
        });

        setTimeout(() => {
            this.setState({
                rolling:false
            })
        }, 1000);
        
        // if(random1 && random2 == this.props.sides[5]){
        //     alert("you win") ;
        // }
       
    }

    render(){
        

        return(
            <div >
                <div className={`dice ${this.state.rolling && "roll-dice"}`}>
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button className={`roll-button ${this.state.rolling && "red"}`} onClick={this.roll} disabled={this.state.rolling} >{this.state.rolling ? "Rolling Dice...." : "Roll Dice" }</button>
                <h2>{this.state.die1 === this.state.die2 ? "Congratulations,you win!Keep playing to test your luck even more!" : "To win,you need to get two equal dice numbers. Good luck"}</h2>
            </div>
        )
    }
}

export default RollDice;

