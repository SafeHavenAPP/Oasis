import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TouchableOpacity } from 'react-native';
// import ModalLogin from  '../Authentication/Modal.js'
import SignupForm from '../Authentication/SignupForm.js'
import SigninForm from '../Authentication/SigninForm.js';


export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [isSignupVisible, setIsSignupVisible] = React.useState(false);
  const [isSigninVisible, setIsSigninVisible] = React.useState(false);

  const toggleSignup = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  const toggleSignin = () => {
    console.log("Adreas is okay.");
    setIsSigninVisible(!isSigninVisible);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser([]);
  }

  return (
    <View style={styles.container}>
      {/* TODO: Conditionally render login/Logout buttons */}
      {isLoggedIn === true ?
        <>
          <Button title='Profile' />
          <Button onPress={handleLogout} title='Log out' />
        </>
        :
        <>
          <View style={styles.buttonView}>
            <Button onPress={toggleSignin} title="Sign In" />
            <Button onPress={toggleSignup} title='Sign Up' />
          </View>
          <View View style={styles.centeredView}>
            <Modal
              visible={isSignupVisible}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Button title='X' onPress={toggleSignup} />
                  <SignupForm
                    toggleSignup={toggleSignup}
                    setUser={setUser}
                    user={user}
                  />
                </View>
              </View>
            </Modal>
          </View>
          {/* <TouchableOpacity > */}
          {/* </TouchableOpacity> */}
          <View View style={styles.centeredView}>
            <Modal
              visible={isSigninVisible}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity onPress={toggleSignin} >
                    <Text>x</Text>
                  </TouchableOpacity>
                  <SigninForm
                    toggleSignin={toggleSignin}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                    user={user}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor:'#F8F8F8',
  //   justifyContent:'space-around',
  //   alignItems:'center',
  //   height: 100,
  //   width: 400,
  //   shadowColor:'#F8F8F8',
  //   shadowOffset:{ width:0, height:2 },
  //   shadowOpacity:0.5,
  //   elevation:2,
  //   position: 'absolute'
  // },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonView: {
    display: 'flex',
    width: 375,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});