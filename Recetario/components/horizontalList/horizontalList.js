import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';


const Lista = () => (
    <View style = {estilos.body}>      
      
      <Text style = {estilos.Let}>
        TRENDING
      </Text>     

      <Text style = {estilos.Let}>
        RECENT
      </Text>    
    </View>
  );

/*
  const Lista2 = () => (
    <View style = {estilos.body}>      
      
      <Text style = {estilos.Let}>
        RECENT
      </Text>     
    </View>
  );*/



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
export default Lista; 