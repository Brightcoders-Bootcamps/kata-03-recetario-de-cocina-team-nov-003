import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


const Header = () => {
  
  return (
    <TextInput style={styles.searchBar}
      placeholder="What dou you want to eat?"
      placeholderTextColor="white"         
    />
  );
}

const styles = StyleSheet.create(
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
      marginTop: 20,      
     }

  }
)
export default Header;