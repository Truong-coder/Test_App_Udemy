import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

// Hook up the use of an color, onIncrease, onDecrease inside this function
    const ColorCounter = ({ color, onIncrease, onDecrease }) => {

        return(
            <View>
                {/* using back to characters (not a single quote) in string in JSX */}
                <Text>{color}</Text>
                <Button
            // passing down the ability to call ,setRed with (red+1)
                    title = {`Increase ${color}`}
                    onPress = {()=> onIncrease()}
                />
                <Button
            // passing down the ability to call ,setRed with (red-1)
                    title = {`Decrease ${color}`}
                    onPress = {()=>onDecrease()}
                />
                

            </View>

        );
    };

    const styles = StyleSheet.create({});

    export default ColorCounter;