import React from 'react';
import { StyleSheet, Text, View , Image,TouchableOpacity, Button} from 'react-native';
import LoginScreen from './componets/LoginScreen';
import EventScreen from './componets/EventScreen';
import WorkingScreen from './componets/WorkingScreen';


export default class App extends React.Component {
  render() {
    return (
        <WorkingScreen />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative'
//   },
//   image:{
//     height: 300,
//     width: 300,
//     top: 100,
//     position: 'absolute'
//   },
//   buttonContainer:{
//     height:45,
//     width:225,
//     backgroundColor: '#4f87ec',
//     borderRadius: 10,
//     shadowColor: '#000000',
//     position: 'absolute',
//     bottom:100
//   }
// });
