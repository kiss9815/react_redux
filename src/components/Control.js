import React, { Component, PropTypes }  from 'react';




const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};
function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

const defaultProps ={
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
}

class Control extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <button onClick={this.props.onPlus}>플러스</button>
                <button onClick={this.props.onSubtract}>마이너스</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>

            </div>
        )
    }


}
//                <button onClick={this.props.onPlus}>랜덤컬러</button>


Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
