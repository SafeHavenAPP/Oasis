import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home/Home.js'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{headerTitle: () => (
          <Header/>
      )}} 
      >
        <Stack.Screen 
          name='Home' 
          component={Home} 
          />
        
        <Stack.Screen 
        name='Profile' 
        component={Profile}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
