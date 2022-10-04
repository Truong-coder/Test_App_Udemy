import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

    const ColorCounter = ({color}) => {

        return(
            <View>
                {/* using back to characters (not a single quote) in string in JSX */}
                <Text>{color}</Text>
                <Button
                    title = {`Increase ${color}`}
                    // onPress = {()=>{}}
                />
                <Button
                    title = {`Decrease ${color}`}
                    // onPress = {()=>{}}
                />
                

            </View>

        );
    };

    const styles = StyleSheet.create({});

    export default ColorCounter;