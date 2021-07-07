import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import axios from 'axios';
import RecipeItem from './RecipeItem';

class TrenList extends Component {
  state = {TrenList: []};
  componentDidMount() {
    axios
      .get('https://hectoraguirre.netlify.app/FooCorp.json')
      .then((response) => {
        //console.log(response);
        this.setState({TrenList: response.data});
      });
  }
  renderList = () => {
    return this.state.TrenList.map((recipe) => {
      if (this.props.title === 'TRENDING') {
        if (recipe.cat === 'T') {
          return (
            <RecipeItem
              key={recipe.recipeName}
              recipe={recipe}
              onGoRecipe={() => {
                this.props.onGoRecipe({recipe});
              }}
            />
          );
        }
      } else if (this.props.title === 'RECENT') {
        if (recipe.cat === 'R') {
          return (
            <RecipeItem
              key={recipe.recipeName}
              recipe={recipe}
              onGoRecipe={() => {
                this.props.onGoRecipe({recipe});
              }}
            />
          );
        }
      }
    });
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headerText}>{this.props.title}</Text>
        <ScrollView style={styles.scrollViewStyle} horizontal={true}>
          {this.renderList()}
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  headerText: {
    fontSize: 25,
    color: '#d91a6f',
    fontWeight: '500',
    textTransform: 'uppercase',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 20,
  },
  viewStyle: {
    marginBottom: 50,
  },
  scrollViewStyle: {
    paddingBottom: 10,
  },
};

export default TrenList;
