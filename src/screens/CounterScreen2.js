import React, {useReducer} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

const reducer = (state, action) =>{
// state ==== {count: number;}
 //  action === { type: increment || decrement, payload: 1 }

 switch(action.type) {

    case 'increase':
      return  {...state, count: state.count + action.payload};
    case 'decrease':
       return {...state, count: state.count - action.payload};
    default:
        return state;



 }

    }



const CounterScreen2 = () => {

    const [state, dispatch] = useReducer (reducer,{ count: 0});



return <View>


   <Text>"Welcome to CounterScreen using Reducer"</Text> 

   <Text> Counter Meter : {state.count} </Text>

    <Button title = 'Increase' onPress = {() => { dispatch ({type: 'increase', payload : 1 })} } />
    <Button  title = 'Decrease' onPress = {() => { dispatch ({type: 'decrease', payload : 1 })} }/>


    </View>


};


const styles = StyleSheet.create ({

});

export default CounterScreen2;