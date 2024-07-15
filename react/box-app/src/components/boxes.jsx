import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {
    state = { boxes :[
        {id : 1, x : 1},
        {id : 2, x : 20},
        {id : 3, x : 30},
        {id : 4, x : 40}
    ]} 

    handleDelete = (boxid) => {
        let boxes = this.state.boxes.filter(box => (box.id !== boxid));

        this.setState({
            boxes
        });
    }

    handleReset = () => {
        let boxes = this.state.boxes.map(box => {
            return {
                id: box.id,
                x: 0
            }
        })

        this.setState({
            boxes
        });
    }

    handleClickLeft = (box) =>{
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);

        boxes[k].x --;
        this.setState({boxes});
    }

    handleClickRight = (box) =>{
        const boxes = [...this.state.boxes];
        let k = boxes.indexOf(box);

        boxes[k].x ++;
        this.setState({boxes});
    }

    render() { 
        return (<React.Fragment>
            <button onClick={this.handleReset} style={{margin:"10px"}} className='btn btn-primary'>Reset</button>
            {this.state.boxes.map(box => (
                <Box
                    key={box.id}
                    box={box}
                    onClickLeft={this.handleClickLeft}
                    onClickRight={this.handleClickRight}
                    onDelete={this.handleDelete}
                    id={box.id}
                />
            ))}
        </React.Fragment>);
    }
}
 
export default Boxes;