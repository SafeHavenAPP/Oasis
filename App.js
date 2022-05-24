import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './components/Footer/Footer.js'
import Home from './components/Home/Home.js'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home" 
      options={{headerTitle: () => (
        <Header />
      )}}
      >
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{ title: 'My home' }}
          />
        <Stack.Screen 
        name='Profile' 
        component={Profile} 
        options={{ title: 'My Profile' }}

        />
        {/* <Footer /> */}
      </Stack.Navigator>
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
