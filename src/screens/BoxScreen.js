import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    // <View style={styles.parentStyle}>
    //   <View style={styles.viewOneStyle} />
    //   <View style={styles.viewTwoParent}>
    //     <View style={styles.viewTwoStyle} />
    //   </View>
    //   <View style={styles.viewThreeStyle} />
    // </View>
    <View style = {styles.viewStyle}>
      <Text style = {styles.textOneStyle}>Child #1 </Text>
      <Text style = {styles.textTwoStyle}>Child #2</Text>
      <Text style = {styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    // margin: 20,
    height: 200,
    
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // margin: 20
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 1 //10%
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1, //10%
    fontSize: 18,
    position: 'absolute', // ignore its siblings
    // top: 10, // add 10 units of spacing on top of the object
    // bottom: 10, // add 10 units spacing at the bottom of the object
    // left: 10,
    // right: 10
    ...StyleSheet.absoluteFillObject // change top, bottom, left and right to 0
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 1, //10%
    // alignSelf: 'flex-end' 
  },

  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 20,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green'
  },
  viewTwoParent: {
    // can use margintop
    height: 100,
    justifyContent: 'flex-end'
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;
