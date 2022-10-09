import React, {useReducer} from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

/*
// useState
const CounterScreen = () => {
    //hooks
    // use 'state' to initialize a new piece of state 
    // or new piece of data that being tracked 
    const [counter, setCounter] = useState(0); // return 2 values: The current state and A function that updates the state
    return(
        <View> 
            <Button 
                title = "Increase"
                onPress={()=>{
                    setCounter(counter + 1);

                }}
            />
            <Button 
                title = "Decrease"
                onPress={()=>{
                    setCounter(counter - 1);
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};
*/

// useReducer
// define reducer function
const reducer = (state, action) => {
// state === {count: number}
// action === {type: 'change_increment' || 'change_decrement', payload: 1 }
    switch(action.type){
        
        case 'change_increment': 
            //return new object 
            return {...state, count: state.count + action.payload}; // Spread Operator
        case 'change_decrement':
            return {...state, count: state.count - action.payload};
        default:
            return state; // make no change to state
    }

};
const CounterScreen = () => {
    // dispatch: Manages Changes To An Object
    const [state, dispatch] = useReducer(reducer, { count: 0})
        return (
            <View>
                <Button 
                    title = "Increase"
                    onPress = { () => {
                        dispatch({type: 'change_increment', payload: 1})      
                    }}
                />
                <Button 
                    title = "Decrease"
                    onPress = { () => {
                        dispatch({type: 'change_decrement', payload: 1})
                    }}
                />
                <Text> Current count: {state.count}</Text>
            </View>
        );
    };

const styles = StyleSheet.create({});
export default CounterScreen;



