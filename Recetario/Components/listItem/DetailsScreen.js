import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Details = ({navigation}) => {

    return (
        <View>
            <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
                <Text style = {{backgroundColor: 'red'}}>Back</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Details;