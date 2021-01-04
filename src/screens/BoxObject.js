import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxObject = () => {
   return <View>

    <Text> This is BoxObject Styling Demo </Text>

</View>
}

const styles = StyleSheet.create ({

viewStyle:{
    borderWidth:5,
    borderColor: 'yellow'

    },
    textStyle: {
        color: 'green',
        borderWidth: 5,
        borderColor: 'red',
        margin: 20



    }

});

export default BoxObject;