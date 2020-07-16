/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {}
  }

  render (){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity style={styles.button,{marginBottom:20}}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}};

const styles = StyleSheet.create({
  button:{
    height:50,
    width: windowWidth -40,
    marginLeft:20,
    borderColor : 'red',
    borderWidth:1,
    borderStyle:"solid",
    justifyContent:"center",
    alignItems:"center"
  }
});

export default App;
