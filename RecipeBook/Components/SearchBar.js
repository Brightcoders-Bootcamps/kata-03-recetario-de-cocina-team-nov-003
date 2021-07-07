import React from 'react';
import {TextInput, View} from 'react-native';

const SearchBar = (props) => {
  const {textStyling, viewStyling} = styles;
  return (
    <View style={viewStyling}>
      <TextInput
        style={textStyling}
        placeholder={props.title}
        placeholderTextColor="white"
      />
    </View>
  );
};
const styles = {
  textStyling: {
    fontSize: 18,
    color: 'white',
    borderColor: 'red',
    backgroundColor: '#323233',
    width: 360,
    borderRadius: 10,
    paddingLeft: 20,
  },
  viewStyling: {
    backgroundColor: '#272727',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
};

export default SearchBar;
