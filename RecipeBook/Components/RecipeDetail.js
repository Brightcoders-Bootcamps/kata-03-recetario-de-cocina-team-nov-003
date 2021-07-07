import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Share,
  alert,
} from 'react-native';

class RecipeDetail extends Component {
  renderList = () => {
    return this.props.rdIngredients.map((ingredients) => {
      return (
        <View style={styles.viewIng}>
          <Text style={styles.TextIngName}>{ingredients.ingredientName}</Text>
          <Text style={styles.TextIngAmount}>{ingredients.amount}</Text>
        </View>
      );
    });
  };
  render() {
    //console.log(this.state);
    const onShare = async () => {
      try {
        const result = await Share.share({
          message: this.props.rdName,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
    return (
      <View style={styles.mainView}>
        <View style={styles.viewHeader}>
          <ImageBackground
            style={styles.ImgDetailStyle}
            source={{uri: this.props.rdImage}}
          />
          <View style={styles.viewTextHead}>
            <TouchableOpacity
              style={styles.topaX}
              onPress={this.props.onGoHome}>
              <Text style={styles.textXstyle}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.topaShare} onPress={onShare}>
              <Image
                style={styles.imgShareStyle}
                source={{uri: 'https://hectoraguirre.netlify.app/share.png'}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.topaLove} onPress={onShare}>
              <Image
                style={styles.imgLoveStyle}
                source={{uri: 'https://hectoraguirre.netlify.app/favorite.png'}}
              />
            </TouchableOpacity>
            <Text style={styles.TextCategStyle}>{this.props.rdCategoria}</Text>
            <Text style={styles.TextNameStyle}>{this.props.rdName}</Text>
          </View>
        </View>
        <View style={styles.viewServings}>
          <Text style={styles.TextServings}>
            Ingredients for {this.props.rdServings} servings
          </Text>
        </View>
        <View style={styles.viewIngredients}>
          <ScrollView style={styles.scrollViewStyle}>
            {this.renderList()}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = {
  mainView: {
    backgroundColor: '#272727',
    flexDirection: 'column',
    flex: 1,
  },
  viewHeader: {
    flex: 4,
  },
  viewTextHead: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  viewServings: {
    flex: 0.5,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  viewIngredients: {
    flex: 3,
    paddingTop: 25,
  },
  ImgDetailStyle: {
    opacity: 0.3,
    height: '100%',
  },
  scrollViewStyle: {
    flex: 1,
  },
  TextCategStyle: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    marginTop: '64%',
    marginLeft: 20,
  },
  TextNameStyle: {
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    marginTop: '70%',
    marginLeft: 20,
  },
  TextServings: {
    color: 'white',
    fontSize: 21,
    width: '35%',
    lineHeight: 30,
  },
  viewIng: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#323232',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  TextIngAmount: {
    color: 'white',
    fontSize: 15,
  },
  TextIngName: {
    color: 'white',
    fontSize: 15,
  },
  textXstyle: {
    color: 'white',
    fontSize: 32,
  },
  imgLoveStyle: {
    width: 32,
    height: 28,
  },
  imgShareStyle: {
    width: 30,
    height: 30,
  },
  topaX: {
    position: 'absolute',
    marginLeft: 20,
    marginTop: 15,
  },
  topaShare: {
    position: 'absolute',
    marginLeft: 300,
    marginTop: 25,
  },
  topaLove: {
    position: 'absolute',
    marginLeft: 350,
    marginTop: 25,
  },
};

export default RecipeDetail;
