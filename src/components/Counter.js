import { Component } from "react";

class Counter extends Component{

    constructor(props){
        console.log("Inside Constructor Function -- 1")
        super(props);    //it will access the constructor of the parent class
        this.state={
            seconds : 0 //initial state
        }
    }

    tick(){
        this.setState({seconds:this.state.seconds + 1});
    }

    //you can use this function to set styles,themes
    componentWillMount(){
        console.log("Inside ComponentWillMount Function -- 2 ")
    }

    //Any side-effect work such as AJAX
    componentDidMount(){
        console.log("Inside ComponentDidMount -- 4")
        this.timerID = setInterval(()=>this.tick(),1000)
    }
    componentDidUpdate(){
        console.log("Inside componentDidUpdate -- 5 ")
    }

    render(){
        console.log ("Inside Render - 3");
        return(
            <div>
                <h1>Time Elapsed : {this.state.seconds}</h1>
            </div>
        )
    }

}

export default Counter;