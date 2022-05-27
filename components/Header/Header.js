import * as React from "react";
import {
  StyleSheet,
  View,
  Button,
  Modal,
  Text
} from "react-native";
import SignupForm from "../Authentication/SignupForm.js";
import SigninForm from "../Authentication/SigninForm.js";

export default function Header({ user, setUser, isLoggedIn, setIsLoggedIn, handleLogout }) {

  const [isSignupVisible, setIsSignupVisible] = React.useState(false);
  const [isSigninVisible, setIsSigninVisible] = React.useState(false);

  //modal pop up
  const toggleModalSignup = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  //modal pop up
  const toggleModalSignin = () => {
    setIsSigninVisible(!isSigninVisible);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn === true ? (
        <>
          <View style={styles.statusBarStyle}>
            <View>
              <Text style={styles.homeTitle}>Oasis</Text>
            </View>
            <View style={styles.logoutButton}>
              <Button onPress={handleLogout} title="Log out" color='#064e3b' />
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.buttonView}>
            <Button onPress={toggleModalSignin} title="Sign In" value={isLoggedIn} color='#064e3b' />
            <Text style={styles.homeTitle}>Oasis</Text>
            <Button onPress={toggleModalSignup} title="Sign Up" color='#064e3b' />
          </View>
          <View View style={styles.centeredView}>
            <Modal
              visible={isSignupVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <SignupForm
                    toggleSignup={toggleModalSignup}
                    user={user}
                    setUser={setUser}
                  />
                  <View style={{ marginTop: 15 }}>
                    <Button title="Close" onPress={toggleModalSignup} color='#841584' />
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View View style={styles.centeredView}>
            <Modal
              visible={isSigninVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <SigninForm
                    toggleSignin={toggleModalSignin}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                    user={user}
                  />
                  <View style={{ marginTop: 15 }}>
                    <Button
                      title="Close"
                      onPress={toggleModalSignin}
                      color='#841584'
                    />
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 275,
    backgroundColor: '#a8ffec',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonView: {
    display: "flex",
    width: 375,
    marginBottom: -30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  homeTitle: {
    fontSize: 40,
    color: '#c96747',
  },
  logoutButton: {
    height: 40,
  },
  statusBarStyle: {
    width: 325,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  }
});
