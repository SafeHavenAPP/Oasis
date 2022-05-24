import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      {/* TODO: Conditionally render login/Logout buttons */}
      <Button title='LogIn' />
      <Button title='SignUp' />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC6CF',
    alignItems: 'stretch',
    // justifyContent: 'space-evenly',
  },
});