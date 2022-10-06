
/** 
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

/* Anytime we make a true constant value that we want to be some
configuration option inside of a component that is not a prop use this kind 
of syntax as a sign to others that this is some very special variable



const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    // create state values color from 0 - 255
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    
    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        
        switch (color) {
            case 'red':
        /* TERNARY EXPRESSION
        - A ternary expression is going to essentially check on statement
        - If that statement evaluates to a truth value, it will run some immediate statement 
        in this case is 'return' otherwise it runs statement 'setRed(red + change)'
        - The '?' means that this is going to be the expression that we want to run if all this evaluates to a truth value
        - The ':' means do this if the previous statement false    

        
                red + change > 255 || red + change < 0 ? null : setRed(red+change) 
                // if(color === 'red'){
                //     if(red + change > 255 || red + change < 0){
                //         return;
                //     }
                //     else{
                //         setRed(red + change);
                //     }
                // } 
                return; 
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
                    
              
        }
        
    };

    // console.log(red);
    // console.log(green);
    // console.log(blue);

    return(
        <View>
            {/* -JSX 
                - propname color 
                - add 2 callback functions to each of these
                - Each one needs to either increment or decrement the current state value
                - add new propname onIncrease
            }
            <ColorCounter 
                // onIncrease = {()=> {setRed(red+COLOR_INCREMENT)}} 
                // onDecrease = {()=> setRed(red-COLOR_INCREMENT)}
                
                onIncrease={() => setColor('red', COLOR_INCREMENT)} // set 'red' as string
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color ="Red" 
                />
            <ColorCounter 
                onIncrease = {() => setColor('green', COLOR_INCREMENT)} // set 'green' as string
                onDecrease = {() => setColor('green', -1 * COLOR_INCREMENT)}
                color ="Green"
                />
            <ColorCounter 
                onIncrease = {() => setColor('blue', COLOR_INCREMENT)} // set 'blue' as string
                onDecrease = {() => setColor('blue', -1 * COLOR_INCREMENT)}
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
 
*/
