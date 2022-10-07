import { Component } from "react";


class HelloMessageClass extends Component{
    render(){

        
        const message = this.props.message ? this.props.message : "Hi,Hello";
        return <div>Message from {this.props.name}:{message}</div>
    }
}

export default HelloMessageClass


