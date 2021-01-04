import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

namelen = 4;

const TextScreen = () => {
    const[name,setName] = useState ('');

return <View>
<Text> Welcome to Text Screen demo </Text>

<Text style = {styles.text}>  Enter  Your  Password</Text>

<TextInput  
style = {styles.input}
    autoCapitalize = "none"
    autoCorrect = {false}
    value = {name}
    onChangeText = {newValue => setName(newValue)}
/>
<Text style = {styles.text}> My Name is : {name}</Text>
 { name.length < 4 ? <Text style = {styles.text} > Password must be 4 chararcters long</Text> : null}


 </View>

}
const styles = StyleSheet.create ({ 
    input: {
      

        margin: 10,
        borderColor: 'green',
        borderWidth: 2


    },

    text:{
        fontSize: 20,
        color: 'red'


    }

});

export default TextScreen;
