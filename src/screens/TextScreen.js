import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return(
        <View>
            <Text style = {styles.fontText}>Enter your password here!</Text>
            <TextInput 
                style = {styles.input}
                // Two important props
                autoCapitalize = "sentences"
                autoCorrect = {false}
                value = {password}   // hardcoded value for our TextInput     
                /**
                 * Pass in a callback function
                 * Anytime we update the state, it will cause this component to rerender
                 * -> rerender <TextInput /> -> pass in the new value
                 *  */ 
                onChangeText = { newValue => setPassword(newValue)}
            />

            {password.length < 6 ? <Text> Password must be atleast 6 characters</Text> : null}
         
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 35,
        height: 45,
        fontSize: 15,
        borderColor: 'black',
        borderWidth: 1   
    },
    fontText:{
        margin: 35,
        height: 45,
        fontSize: 25
    }

});

export default TextScreen;