import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ModalLogin from './Authentication/Modal';
export default function Header() {
  const [modalShown, setModalShown] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  


  return (
    <View style={styles.container}>
      {/* TODO: Conditionally render login/Logout buttons */}
      {isLoggedIn === true?
      <>
      <Button title='Profile' />
      <Button title='Logout' />
      </>
      :
      <>
      <Button onPress={setModalShown(true)} title='Login' />
      <Button title='Signup' />
      </>
    }

    {modalShown === true ?
    <>
      <ModalLogin />
    </>
    :null}

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