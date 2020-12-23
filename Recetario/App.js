import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/searchBar/searchBar";
import Lista from "./components/horizontalList/horizontalList";

const App = () => (
  <View style = {estilos.body}>

    <Header></Header>

    <Lista></Lista>
    
    <Text style = {estilos.Let}>
     PRUEBAS
    </Text>
  </View>
);


const estilos = StyleSheet.create(
  {
    body: 
    {
      backgroundColor: 'black',
      flex: 1,
      padding: 5
    },
     Let: 
     {
       color: 'white'
     }

  }
)

export default App;