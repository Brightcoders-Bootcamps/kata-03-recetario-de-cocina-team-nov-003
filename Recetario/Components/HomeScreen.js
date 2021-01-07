import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavBar from './searchBar';
import trendignsRecipes from './trendingsRecipes';
import ListRecents from './listRecents';
import ListTrending from './listTrendings';
import recentRecipes from './recentRecipes';


const Home = ({navigation}) => {    
       
    

    return (
       
        <View style={styles.body}>
            <NavBar></NavBar>
            <Text style={styles.titles}>TRENDING</Text>
            <ListTrending navigation={navigation} data={trendignsRecipes}></ListTrending>
            
            <Text style={styles.titles}>RECENT</Text>
            <ListRecents navigation={navigation} data={recentRecipes}></ListRecents>                       
        </View>
    )

}

const styles = StyleSheet.create ({
    body:
    {
        backgroundColor: '#212529',
        flex: 1,
    },
    titles: 
     {
       color: '#ff0a54',
       marginTop: 20, 
       fontSize: 25,  
       marginLeft: 5
     },

})
export default Home;