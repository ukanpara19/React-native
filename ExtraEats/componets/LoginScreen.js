import React from 'react';
import { StyleSheet, View , Image,TouchableOpacity, Button} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/extra_eats.png')} />
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
              <Button
                styles = {styles.button}
                onPress={()=> {console.log("sihbvs")}}
                title="Sign in with Google"
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
    height: 300,
    width: 300,
    top: 100,
    position: 'absolute'
  },
  buttonContainer:{
    height:45,
    width:225,
    backgroundColor: '#4f87ec',
    borderRadius: 10,
    shadowColor: '#000000',
    position: 'absolute',
    bottom:100
  }
});
