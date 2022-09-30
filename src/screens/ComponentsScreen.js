import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from '../Colors';
const ComponentsScreen = () => {
    const greeting = 'HI BRO!';
    const greeting2 = <Text>Hello to you!</Text>;
    const myName = 'Truong';
  // JSX
  return (
  
  <View>
       <Text style={styles.textStyle}>This is the components screen</Text>
        <Text style={styles.textStyle2}>Hi there!</Text>
        <Text style={styles.textStyles3}>{greeting}</Text>
        {greeting2}
        <Text>My name is {myName}</Text>
  </View>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    color: Colors.main,
  },
  textStyle2: {
    fontSize:40,
    color: Colors.blue,
  },
  textStyle3: {
    fontSize:30,
    color: Colors.red,
  }
});

export default ComponentsScreen;
