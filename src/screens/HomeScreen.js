import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
  

  return (
    // pass in a title prop and onPress prop
    <View style = {styles.text}>
      <Text style={styles.text}>Press to change screen!</Text>
      <View>
      <Button style ={styles.button}
        title="Go to component Demo"
        onPress={ () => navigation.navigate('Components') }// notify when pressed
      /> 
      </View>
      
      <Button style ={styles.button} 
        title="Go to List Demo" 
        onPress={()=> navigation.navigate('List')}
      />
      <Button style ={styles.button}
        title="Go to Image Demo"
        onPress={()=> navigation.navigate('Image')}
      />
      <Button style ={styles.button}
        title="Go to CounterScreen"
        onPress={()=> navigation.navigate('Counter')}
      />
      <Button 
        title="Go to ColorScreen"
        onPress={()=> navigation.navigate('Color')}
      />

      <Button 
        title="Go to Square Screen"
        onPress = {()=> navigation.navigate('Square')}
      />
      <Button 
        title="Go to Text Screen"
        onPress = {()=> navigation.navigate('Text')}
      />
      <Button 
        title="Go to Box Screen"
        onPress = {() => navigation.navigate('Box')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text> Go to List Demo</Text>
        <Text> Go to List Demo 2</Text>
        <Text> Go to List Demo 3</Text>
      </TouchableOpacity> */}
    </View>    
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 15,
    
  },
  button: {
    jutifyConten: 'space-between'
  }
});

export default HomeScreen;
