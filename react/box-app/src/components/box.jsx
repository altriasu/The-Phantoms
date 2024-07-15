import React, { Component } from 'react';

class Box extends Component {
    state = { x : this.props.box.x }; 

    

    getStyle = () => {
        let style = {
            width:"80px",
            height:"80px",
            backgroundColor:"lightblue",
            margin: "2px",
            textAlign:"center",
            lineHeight:"80px",
            marginLeft: this.props.box.x,
        }
        return style;
    }

    render() { 
        return (
            <React.Fragment>
                <div style={this.getStyle()}>{this.props.box.x}</div>
                <button onClick={() => this.props.onClickLeft(this.props.box)} className='btn btn-primary m-2'>left</button> 
                <button onClick={() => this.props.onClickRight(this.props.box)} className='btn btn-success m-2'>right</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger m-2'>Delete</button>
            </React.Fragment>
        );
    }
}
 
export default Box;