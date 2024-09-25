import React, { Component } from "react";

class Mycomponent extends Component{
    constructor(props){
        super(props);
        console.log('1.constructor');
        this.state={data:'Hello  React!'};
    }
    componentDidMount(){
        console.log('3.componentDidMount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('4.componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('5.componentWillUnmount-unmounting phase');
    }
    handleclick(){
        this.setState({data:'Hello Sethu'});
    }
    render(){
        console.log('2.component-Rendered');
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={this.handleclick.bind(this)}>Click</button>
            </div>
        )
    }

}
export default Mycomponent;