import React, { Component, PropTypes }  from 'react';



class Value extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }

}


const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;


export default Value;
