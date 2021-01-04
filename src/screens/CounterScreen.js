import React, {useState} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
     
    const [counter, setCounter] = useState(0);
    
    return (
        <View>

        <Text> My Counter Screen: {counter} </Text>

        <Button 
        title = 'Increase' 
        onPress = {() => {
            // Don't do this
          //  counter++;
          setCounter(counter + 1);
            
            }} 

        />
    
        <Button 
        title = 'Decrease' 
        onPress = {() => {
        // Don't do this
          //  counter--;
          setCounter(counter - 1);
        }} 

        />




        </View>


    );

};

const styles = StyleSheet.create ({});

export default CounterScreen;