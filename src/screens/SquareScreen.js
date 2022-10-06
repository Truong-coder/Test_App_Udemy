import React, {useReducer} from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

/* Anytime we make a true constant value that we want to be some
configuration option inside of a component that is not a prop use this kind 
of syntax as a sign to others that this is some very special variable

*/

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number };
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
   
    switch (action.colorToChange) {
        // never modify a state dỉrectly
        case 'red':
    /**
     * Make a new object
     * Take all the existing props out of our state object and
     * we're going to essentially copy paste them into new one
     * Then overwriting the existing red property and the new value
     * for red will be state.red + action.amount
     */
            return { ...state, red: state.red + action.amount};
        case 'green':
            return { ...state, green: state.green + action.amount};
        case 'blue':
            return { ...state, blue: state.blue + action.amount};
    /**
     * The dafault case is going to handle the case in which we accidentally throw an action
     With a invalid color to change or a undefined color to change
     *  */ 
        default: 
    }
};
    // create state values color from 0 - 255
    // pass in reducer function
    const [state, dispatch] = useReducer(reducer, {red:0, green: 0, blue: 0});
    //define reducer function
    return(
        <View>
            {/* -JSX 
                - propname color 
                - add 2 callback functions to each of these
                - Each one needs to either increment or decrement the current state value
                - add new propname onIncrease
            */}
            <ColorCounter 
                // onIncrease = {()=> {setRed(red+COLOR_INCREMENT)}} 
                // onDecrease = {()=> setRed(red-COLOR_INCREMENT)}
                
                onIncrease={() => } // set 'red' as string
                onDecrease={() => }
                color ="Red" 
                />
            <ColorCounter 
                onIncrease = {() => } // set 'green' as string
                onDecrease = {() => }
                color ="Green"
                />
            <ColorCounter 
                onIncrease = {() => } // set 'blue' as string
                onDecrease = {() => }
                color ="Blue"
                />
            <View 
            // The outer set means we're about to reference some JS expression
            // The inner set is creating an actual object literal
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