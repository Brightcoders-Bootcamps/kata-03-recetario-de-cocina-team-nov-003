import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

const Item = ({image,name,navigation}) => {

    return (
        <TouchableOpacity onPress={() =>navigation.navigate('Details')}>            
            <Image style={styles.image} source={image}></Image>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

const ListRecents = ({data,navigation}) => {

    const renderItem = ({item}) => {
        return (
            <Item navigation={navigation} styles={styles.item} image ={item.image} name={item.recipeName}></Item>
        )        
    }

    return (
        <FlatList         
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
    />
    )
}

const styles = StyleSheet.create ({
    item:
    {
        width:30,
        height:30,            
    },
    image:
    {
        width:150,
        height:150,
        margin:10,
        borderRadius:5     
    },
    text:
    {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
    }

})

export default ListRecents;