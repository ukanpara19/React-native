import React from 'react';
import { StyleSheet, View , Image,TouchableOpacity, Button,Text, TextInput} from 'react-native';

export default class EventScreen extends React.Component {
    constructor(){
        super();
            this.state = {
                eventName: " "
            }
        }
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/food_box.png')} />
            <Text style={{margin: 10}}>EVENT NAME</Text>
          <TextInput 
            style={{height: 40, width: 200, borderColor: 'gray', borderRadius: 10, backgroundColor: '#f1f6ef'
        }}
            // onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.text}
          />
            <Text style={{margin: 10}}>LOCATION</Text>
          <TextInput 
            style={{height: 40, width: 200, borderColor: 'gray', borderRadius: 10, backgroundColor: '#f1f6ef'
        }}
            // onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.text}
          />
            <Text style={{margin: 10}}>EARLIEST PICKUP</Text>
          <TextInput 
            style={{height: 40, width: 200, borderColor: 'gray', borderRadius: 10, backgroundColor: '#f1f6ef'
        }}
            // onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.text}
          />
            <Text style={{margin: 10}}>LATEST PICKUP-UP</Text>
          <TextInput 
            style={{height: 40, width: 200, borderColor: 'gray', borderRadius: 10, backgroundColor: '#f1f6ef'
        }}
            // onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.text}
          />
        <Text style={{margin: 10}}>DESCRIPTION OF FOOD</Text>
          <TextInput 
            style={{height: 80, width: 300, borderColor: 'gray', borderRadius: 10, backgroundColor: '#f1f6ef'
        }}
            // onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.text}
          />
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
              <Button
                styles = {styles.button}
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
  buttonContainer:{
    height:45,
    width:225,
    backgroundColor: '#4f87ec',
    borderRadius: 10,
    shadowColor: '#000000',
    position: 'absolute',
    bottom:50
  }
});
