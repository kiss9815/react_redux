import React, { Component, PropTypes }  from 'react';
import Control from './Control';
import Value from './Value';
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
    }

    render(){
        return(
            <div>
                <Value />
                <Control
                    />

            </div>
        )
    }
}
// ={this.props.number}

// onPlus={this.props.handleIncrement}
// onSubtract={this.props.handleDecrement}

// onRandomizeColor={this.setRandomColor}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
