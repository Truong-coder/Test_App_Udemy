import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  

  return (
    //pass in a title prop and onPress prop
    <View style = {styles.text}>
      <Text style={styles.text}>Hi there!</Text> 
      <Button 
        title="Go to component Demo"
        onPress={ () => navigation.navigate('Components') }// notif when pressed
     
      /> 
      <Button  
        title="Go to List Demo"
        onPress={()=> navigation.navigate('List')}
      />
      <Button 
        title ="Go to Image Demo"
        onPress={()=> navigation.navigate('Image')}
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
    marginVertical: 15
  }
});

export default HomeScreen;
