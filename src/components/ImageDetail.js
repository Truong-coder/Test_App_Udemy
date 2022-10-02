import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// create a separate reusable component and use it three separate time
// Each time pass it in a different set of props to customize how the component behaved.

const ImageDetail = props => {
    // console.log(props);
//../ -> goes up 1 directory
// ../../ -> take up to root directory
    return( 
        <View>
            <Image source ={props. imageSource}/>
            <Text> {props.title} </Text>
            <Text> Image score - {props.score} </Text>
        </View>
    
    );
};

const styles = StyleSheet.create({
    
});


export default ImageDetail;