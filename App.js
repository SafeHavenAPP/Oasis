// import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
// import Footer from './components/Footer/Footer.js'
import Home from './components/Home/Home.js'
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';

export default function App() {

  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{headerTitle: () => (
          <Header
            // isLoggedIn={isLoggedIn}
            // setIsLoggedIn={setIsLoggedIn}
          />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
