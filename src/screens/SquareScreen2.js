import React, {useReducer} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number};
    // action === { type: 'red' || 'green' || 'blue', amount: 15 || -15)};

    switch (action.type) {
case 'red':
     return state.red + action.payload >  255 || state.red + action.red < 0 ? state : {...state, red: state.red + action.payload};
    
    
case 'green':
    return state.green + action.payload >  255 || state.green + action.green < 0 ? state : {...state, green: state.green + action.payload};
case 'blue':
    return state.blue + action.payload >  255 || state.blue + action.blue < 0 ? state : {...state, blue: state.blue + action.payload};
default:
    return state;

    }

};


const SquareScreen2 = () => {


    const [state, Runmyreducer] = useReducer( reducer, { red:0, green:0, blue:0});

    
    const { red, blue, green} = state;

    return <View>

    <Text> Welcome to Color Changing Screen with reducer ( funtion to manage change in state) </Text>
    <Text> "Have Fun" ;) </Text>

    <ColorCounter 
    onIncrease = {() => Runmyreducer ({ type: 'red', payload: COLOR_INCREMENT})} 
    onDecrease = {() => Runmyreducer ({ type: 'red', payload: -1 * COLOR_INCREMENT})} 
    color = "Red"

    />
    <ColorCounter 
    onIncrease = {() => Runmyreducer ({ type: 'green', payload: COLOR_INCREMENT})} 
    onDecrease = {() => Runmyreducer ({ type: 'green', payload: -1 * COLOR_INCREMENT})} 
    color = "Green"

    />

    <ColorCounter 
    onIncrease = {() => Runmyreducer ({ type: 'blue', payload: COLOR_INCREMENT})}
    onDecrease = {() => Runmyreducer ({ type: 'blue', payload: -1 * COLOR_INCREMENT})} 
    color = "Blue"

    /> 

<View style= {{ 
    height: 150, 
    width: 150, 
    backgroundColor: `rgb(${red}, ${green}, ${blue})`}}

    />

    </View>
    
};

const styles = StyleSheet.create({


});

export default SquareScreen2;