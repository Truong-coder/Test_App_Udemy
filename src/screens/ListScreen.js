import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
   // create a array named 'friend'
   //Method 1: add a unique key property to each element
    const friends = [
        {name: 'Friend #1', age: 30},// key: '1'},
        {name: 'Friend #2', age: 45},// key: '2'},
        {name: 'Friend #3', age: 32},// key: '3'},
        {name: 'Friend #4', age: 27},// key: '4'},
        {name: 'Friend #5', age: 53},// key: '5'},
        {name: 'Friend #6', age: 30}// key: '6'},
        // {name: 'Friend #7', age: '30'},//key: '7'},
        // {name: 'Friend #8', age: '30'},// key: '8'},
        // {name: 'Friend #9', age: '30'},// key: '9'},
    ];

    return(
    // JSX
       <FlatList 
    //    horizontal
    //    showsHorizontalScrollIndicator = {false}
       //Method 2
       // this can be called many times
       keyExtractor= { (friend) => friend.name }
        
       
       data ={friends} // define the 'data' props
       renderItem={({ item }) => {
        // To pull off that item property make use of es6 destructuring
        // element === {item: {name: 'Friend #1'}, index: 0}
        // item === {name:'Friend #1'}
        return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
       }}    
       />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }, 

});

export default ListScreen;