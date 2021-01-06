import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


const NavBar = () => { 
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
      marginLeft: 5,
      backgroundColor: '#495057',
      height: 35,
      borderColor: '#495057',
      color: 'white',
      width: 340,
      borderRadius: 10,
      marginTop: 20,
      fontSize: 16,
      paddingLeft: 20,
      paddingBottom: 5,
      paddingTop: 5
     }

  }
)
export default NavBar;