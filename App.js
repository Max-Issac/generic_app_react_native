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
  Dimensions,
  ImageBackground
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {}
  }

  login = () => {
    this.props.navigation.navigate("Login");
  }

  createAccount = () => {
    this.props.navigation.navigate("CreateAccount");
  }

  render (){
    return (
      <View style={{backgroundColor:"#675e59",flex:1,position:"relative"}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1}}>
          <View style={[styles.bottom]}>
            <TouchableOpacity style={[styles.button,{backgroundColor:"#dc6e35",marginBottom:20}]} onPress={this.login}>
              <Text style={[styles.buttonText]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.whiteBorder]} onPress={this.createAccount}>
              <Text style={[styles.buttonText]}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bottom:{
    position:"absolute",
    bottom:100,
    flex:1
  },
  button:{
    height:50,
    width: windowWidth - 60,
    marginLeft:30,
    borderColor: '#dc6e35',
    borderWidth:1,
    borderStyle:"solid",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  buttonText:{
    color:"#ffffff",
    fontSize:16
  },
  whiteBorder:{
    borderColor:"#ffffff",
  }
});

export default App;
