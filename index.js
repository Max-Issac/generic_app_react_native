/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import App from './App';
import Test from './src/pages/test';

const Stack = createStackNavigator();

const RootRouter = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Home" component={App} options={{title:"Home"}}/>
        <Stack.Screen name="Test" component={Test} options={{title:"Test"}}/>
      </Stack.Navigator>
    </NavigationContainer>
) 
AppRegistry.registerComponent(appName, () => RootRouter);
