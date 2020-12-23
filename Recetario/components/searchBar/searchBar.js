import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


const Header = () => {
  const [value, onChangeText] = React.useState('What do you want to eat?');

  return (
    <TextInput style={estilos.searchBar}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

const estilos = StyleSheet.create(
  {    
     searchBar:
     {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      color: 'white',
      padding: 10,
      width: 350,
      borderRadius: 10,
      marginTop: 10,      
     }

  }
)
export default Header;