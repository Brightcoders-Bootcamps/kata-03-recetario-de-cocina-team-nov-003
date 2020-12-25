import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
    image: require("../images/galletas.png"),
  },
  {
    id: "2",
    title: "Second Item",
    image: require("../images/galletas.png"),
  },
  {
    id: "3",
    title: "Third Item",
    image: require("../images/galletas.png"),
  },
  {
    id: "4",
    title: "Fourht Item",
    image: require("../images/galletas.png"),
  },
  {
    id: "5",
    title: "Fifth Item",
    image: require("../images/galletas.png"),
  },
  {
    id: "6",
    title: "Sixth Item",
    image: require("../images/galletas.png"),
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>{item.image}</Text>
  </TouchableOpacity>
);

const Lista2 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id, item.image)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal = {true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: 
  {
    backgroundColor: 'red',
    height: 200,    
    marginTop: 10,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: 
  {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  title: 
  {
    fontSize: 10,
  },
});

export default Lista2;


/*import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';


const Lista = () => (
    <View style = {estilos.body}>      
      
      <FlatList style = {estilos.Let}>
        
      </FlatList> 

      
    </View>
  );



const estilos = StyleSheet.create(
  {  
     body: 
     {
        borderColor: 'gray', 
        borderWidth: 1,
        height: 440,
        marginTop: 10,
        padding: 5,
     },
     Let:
     {
        color: 'red',
        fontSize: 20,
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
        height: 200,
     },
  }
)
export default Lista; */