import React, { Component, PropTypes }  from 'react';
import Control from './Control';
import Value from './Value';
import { connect } from 'react-redux';
import * as actions from '../actions';

//Control 과 Value 를 가지고 있는 smart Component
// smart 컴포넌트는 redux store 와 연결되어 있는것
const propTypes = {

}
const defaultProps = {

}


class Counter extends Component{
    constructor(props){
        super(props);
        console.log("Counter");
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
           Math.floor((Math.random()*55) + 200),
           Math.floor((Math.random()*55) + 200),
           Math.floor((Math.random()*55) + 200)
        ]
        this.props.handleSetColor(color); // 밑에 사용

    }

    render(){
        const color = this.props.color;

        const style = {
           background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };
        return(
            <div style = {style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                    />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color : state.ui.color
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => {dispatch(actions.increment())},
        handleDecrement: () => {dispatch(actions.decrement())},
        handleSetColor: (color) => {dispatch(actions.setColor(color))}
    }
}


Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
