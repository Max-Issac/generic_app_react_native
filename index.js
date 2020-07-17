/**
 *  配置router
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import App from './App';
import Login from './src/screens/login/login';//登陆页
import CreateAccount from './src/screens/login/createAccount';//创建账户

const Stack = createStackNavigator();

const RootRouter = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen 
          name="App" 
          component={App} 
          options={{headerShown:false}}/>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown:false}}/>
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount} 
          options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
) 
AppRegistry.registerComponent(appName, () => RootRouter);
