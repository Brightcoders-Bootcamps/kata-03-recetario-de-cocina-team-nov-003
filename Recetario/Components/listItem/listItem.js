import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ListItem = ({navigation}) => {

    return (
        <View>
            <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
                <Text style = {{backgroundColor: 'blue'}}>Back</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ListItem;