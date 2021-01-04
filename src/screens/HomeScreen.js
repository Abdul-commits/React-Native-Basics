import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
  
  <Text style={styles.text}>Hi there - welcome to my first react native app</Text>
  <Button 
  onPress = {() => console.log ('Components')}
  title = " (console.log) Check"
 />
  
  <Button 
  onPress = {() => navigation.navigate ('Components')}
  title = " Go to the Components Demo"
  />

   <Button 
  onPress = {() => navigation.navigate ('List')}
  title = " Go to the List Demo"
  />

<Button 
  onPress = {() => navigation.navigate ('Image')}
  title = " Go to the Image Demo"
  />

<Button 
  onPress = {() => navigation.navigate ('Counter')}
  title = " Go to the Counter Demo "
  />

<Button 
  onPress = {() => navigation.navigate ('Color')}
  title = " Go to the Color Demo "
  />

<Button 
  onPress = {() => navigation.navigate ('Square')}
  title = " Go to the Square Color Demo  "
  />

<Button 
  onPress = {() => navigation.navigate ('Square2')}
  title = " Go to the Square Color Demo ( using Reducer) "
  />

<Button 
  onPress = {() => navigation.navigate ('Counter2')}
  title = " Go to the Counter Demo ( using Reducer) "
  />

<Button 
  onPress = {() => navigation.navigate ('Text')}
  title = " Go to the Text Screen Demo "
  />

<Button 
  onPress = {() => navigation.navigate ('Box')}
  title = " Go to the Box Object Demo "
  />

<Button 
  onPress = {() => navigation.navigate ('Flex')}
  title = " Go to the Flex Model Demo "
  />

  <TouchableOpacity onPress = {() => navigation.navigate ('List')}>
    <Text> Go to List Demo (TouchableOpacity) </Text>
  </TouchableOpacity>


  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
