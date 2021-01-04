import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from './components/ImageDetail';


const ImageScreen = () => {

return (
     <View>

    <Text> Welcome to my Image Screen </Text>
    <ImageDetail title = 'Forest' ImageSource = {require('../../assets/forest.jpg')} ImageScore = '9'/>
    <ImageDetail title = 'Beach' ImageSource = {require('../../assets/beach.jpg')} ImageScore = '8'/>
    <ImageDetail title = 'Mountain' ImageSource = {require('../../assets/mountain.jpg')} ImageScore = '7' />
    <ImageDetail title = 'Cloud' ImageSource = {require('../../assets/cloudy_744190.png')} ImageScore = '10' />


</View>

);

};

const styles = StyleSheet.create({});


export default ImageScreen;