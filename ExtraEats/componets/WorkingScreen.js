import React from 'react';
import { StyleSheet, View , Image,TouchableOpacity, Button, Text} from 'react-native';

export default class WorkingScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }
  render() {
    return (
      <View>
      <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/food_box.png')} />
          <Text style= {styles.text}>{this.state.content}</Text>
      </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
              <Button
                onPress={()=> {console.log("sihbvs")}}
                title="Back"
                color="#f7f7f7"
              />
        </TouchableOpacity>
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  image:{
    height: 100,
    width: 200,
    top: 30,
    position: 'absolute'
  },
  text:{
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  }
});
