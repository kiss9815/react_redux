import React, { Component, PropTypes }  from 'react';
import Counter from './Counter';

class App extends Component{
    constructor(props) {
       super(props);
   }
    render() {
        return (
            <Counter/>

        );
    }
}
const propTypes = {

}
const defaultProps = {

}


App.propTypes = propTypes;
App.defaultProps = defaultProps;


export default App;
