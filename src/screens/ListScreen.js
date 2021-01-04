import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'rahul', Age: 20 },
        { name: 'rohan', Age: 21 },
        { name: 'Asad', Age: 22 },
        { name: 'inzi', Age: 23 },
        { name: 'rashid', Age: 24 },
        { name: 'Pandey', Age: 25 },
        { name: 'edwin', Age: 26 },
        { name: 'Sarah', Age: 27 },
        { name: 'Aishwarya', Age: 28 }

    ];

    return (
        <View>

        <Text style = {styles.Headerstyle}> " A List of my Friends "</Text>
    <FlatList 

    //horizontal
   // showsHorizontalScrollIndicator = {false}//

    keyExtractor= {friend => {friend.name}}

    data={friends}
    renderItem = {({item}) => {

    return <Text style = {styles.ListStyle}> {item.name}  - Age {item.Age}</Text>;

// element === (item: {name: #friends}), index 0)

    }}

 />
     
    </View>

    );


        
    };

const styles = StyleSheet.create({
  Headerstyle:{
      fontSize: 36
  },

  ListStyle: {
      marginVertical: 40
  }

});

export default ListScreen;