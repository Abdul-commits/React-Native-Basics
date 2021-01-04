import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Flexmodel = () => {
    <View>

    <Text> This is BoxObject Styling Demo </Text>
    <Text> This is BoxObject Styling Demo </Text>
    <Text> This is BoxObject Styling Demo </Text>

</View>
}

const styles = StyleSheet.create ({

viewStyle:{
    borderWidth:5,
    borderColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

    },
    textStyle: {
        color: 'green',
        borderWidth: 5,
        borderColor: 'red',
        margin: 20



    }

});

export default Flexmodel;