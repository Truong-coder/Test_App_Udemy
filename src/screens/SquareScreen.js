import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

    return(
        <View>
            {/* propname color */}
            <ColorCounter color ="Red" />
            <ColorCounter color ="Green"/>
            <ColorCounter color ="Blue"/>
        </View>

    );
}

const styels = StyleSheet.create({});

export default SquareScreen;