import * as types from '../actions/ActionTypes';

import update from 'react-addons-update'; //내용 update 용


const initialState = {
    number:0
}

export default function counter(state = initialState, action){
    switch(action.type) {
       case types.INCREMENT:
           let plusState = update(state, {
              number : {$set:state.number + 1}
           })

           return plusState;
       case types.DECREMENT:
           let minusState = update(state, {
              number : {$set:state.number - 1}
           })

           return  minusState;
       default:
            console.log(state);
           return state;
   }
}
