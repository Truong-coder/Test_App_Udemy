import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

// hooks
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  // console.log(colors);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={colors}
        // use destructuring in renderItem
        renderItem={({ item }) => {
          return (
            <View style={{ 
                height: 100, 
                width: 100, 
                backgroundColor: item 
            }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
    //The Math.floor() function always rounds dơn and returns
    // the largest less than or equal to a given number.
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
//templete string
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
