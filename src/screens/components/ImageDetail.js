import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';


const ImageDetail = props => {

return (

<View>

<Image source={props.ImageSource} / >

    <Text> {props.title} </Text>

    <Text> Image Score - {props.ImageScore} </Text>

    

</View>

);

};

const styles = StyleSheet.create({});


export default ImageDetail;