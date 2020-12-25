import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/searchBar/searchBar";
import Lista from "./components/horizontalList/horizontalList";
import Lista2 from "./components/horizontalList/horizontalList2";

const App = () => (
  <View style = {styles.body}>

    <Header></Header>

    <Text style = {styles.Let}>TRENDING</Text>

    <Lista></Lista>
    
    <Text style = {styles.Let}>
     RECENT
    </Text>

    <Lista2></Lista2>
  </View>
);


const styles = StyleSheet.create(
  {
    body: 
    {
      backgroundColor: 'black',
      flex: 1,
      padding: 5
    },
     Let: 
     {
       color: 'red',
       marginTop: 10,       
     }

  }
)

export default App;