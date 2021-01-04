import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greetings = "hi there narshimha";
    const Name = "Abdul Rahman";
    return (

    <View>

    <Text style={styles.subheaderstyle}> Getting Started with react Native </Text>
    <Text style={styles.namestyle}> 'My Name is' {Name} </Text>

    <Text style= {styles.textStyle}> This is the Component Screen</Text>
    <Text> {greetings} </Text>

</View> 

    );
};

const styles = StyleSheet.create( {
    textStyle: {
        fontSize: 30
    },
    subheaderstyle: {
        fontSize: 45
    },

    namestyle:{
        fontSize:20
    }
});

export default ComponentsScreen;