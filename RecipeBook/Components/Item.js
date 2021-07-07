import React from 'react';
import {View} from 'react-native';

const Item = (props) => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    shadowColor: 'black',
    shadowOffSet: {width: 1, height: 1},
    shadowOpacity: 0.1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
};
export default Item;
