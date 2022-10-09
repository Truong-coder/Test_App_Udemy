import React, {useReducer} from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

/* Anytime we make a true constant value that we want to be some
configuration option inside of a component that is not a prop use this kind 
of syntax as a sign to others that this is some very special variable

*/

    const COLOR_INCREMENT = 15;
    const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number };
    // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
   
    switch (action.type) {
        // never modify a state dỉrectly
       
    /**
     * Make a new object
     * Take all the existing props out of our state object and
     * we're going to essentially copy paste them into new one
     * Then overwriting the existing red property and the new value
     * for red will be state.red + action.payload
     */

    /**
     * ES6 TERNARY EXPRESSION
     * A ternary expression is going to essentially check on statement
     * If that statement evaluates to a truth value, it will run some immediate statement 
     * in this case is 'return' otherwise it runs statement 'state.red + action.payload'
     * The '?' means that this is going to be the expression that we want to run if all this evaluates to a truth value
     * The ':' means do this if the previous statement false   
      */  
    //  Validating 
        case 'change_red' :
            return state.red + action.payload > 255 || state.red + action.payload < 0 
                        ? state 
                        : { ...state, red: state.red + action.payload};// ES6 Spread Operator ...state
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
                        ? state 
                        : { ...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
                        ? state 
                        : { ...state, blue: state.blue + action.payload};
    
    //   The dafault case is going to handle the case in which we accidentally throw an action With a invalid color to change or a undefined color to change
     
        default: 
            return state;
    }
};
const SquareScreen = () => {
    /**
     * create state values color from 0 - 255
     * pass in reducer function
     * dispatch used to run my reducer to make a change to our state object
     * define reducer function
    */    

    const [state, dispatch] = useReducer(reducer, {red:0, green: 0, blue: 0});
    // using ES6 destructuring
    // error: Undefined is not an object if we return nothing
    // Which means we cannot pull off the red property from it
    // Make sure we return something for our reducer
    const {red, green, blue} = state;

    // console.log(red);
    // console.log(green);
    // console.log(blue);
    
    return(
        <View>
            {
            /**
             * JSX 
             * propname color 
             * add 2 callback functions to each of these
             * Each one needs to either increment or decrement the current state value
             * add new propname onIncrease
             */
            
            }
            <ColorCounter 
                // onIncrease = {()=> {setRed(red+COLOR_INCREMENT)}} 
                // onDecrease = {()=> setRed(red-COLOR_INCREMENT)}
                
                onIncrease={ () => dispatch({type: 'change_red', payload: COLOR_INCREMENT})} // set 'red' as string
                onDecrease={() => dispatch({type:'change_red', payload: -1 * COLOR_INCREMENT})}
                color ="Red" 
                />
            <ColorCounter 
                onIncrease = {() => dispatch({type: 'change_green', payload: COLOR_INCREMENT}) } // set 'green' as string
                onDecrease = {() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
                color ="Green"
                />
            <ColorCounter 
                onIncrease = {() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} // set 'blue' as string
                onDecrease = {() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
                color ="Blue"
                />
            <View 
            /**
             * The outer set means we're about to reference some JS expression
             * The inner set is creating an actual object literal
             * 'red', 'green' and 'blue' are nested inside state
             */
                style ={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb( ${red} , ${green}, ${blue})`
                 }}
            />
        </View>

    );
}

const styels = StyleSheet.create({});

export default SquareScreen;