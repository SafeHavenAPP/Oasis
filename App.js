// import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Footer from './components/Footer/Footer.js'
import Home from './components/Home/Home.js'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';

export default function App() {

  // const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      useLegacyImplementation
      initialRouteName="Home" 
      >
        <Drawer.Screen 
          name='Home' 
          component={Home}
          />

        <Drawer.Screen 
        name='Profile' 
        component={Profile} 
        />

      </Drawer.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
