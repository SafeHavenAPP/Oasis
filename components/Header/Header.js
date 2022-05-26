import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import SignupForm from "../Authentication/SignupForm.js";
import SigninForm from "../Authentication/SigninForm.js";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [user, setUser] = React.useState([]);
  const [isSignupVisible, setIsSignupVisible] = React.useState(false);
  const [isSigninVisible, setIsSigninVisible] = React.useState(false);

  //modal pop up
  const toggleSignup = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  //modal pop up
  const toggleSignin = () => {
    setIsSigninVisible(!isSigninVisible);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser([]);
  };
  // React.useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn])

  return (
    <View style={styles.container}>
      {isLoggedIn === true ? (
        <>
          <View style={styles.buttonView}>
            <Button onPress={handleLogout} title="Log out" />
          </View>
        </>
      ) : (
        <>
          <View style={styles.buttonView}>
            <Button onPress={toggleSignin} title="Sign In" value={isLoggedIn} />
            <Button onPress={toggleSignup} title="Sign Up" />
          </View>
          <View View style={styles.centeredView}>
            <Modal
              visible={isSignupVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Button title="X" onPress={toggleSignup} />
                  <SignupForm
                    toggleSignup={toggleSignup}
                    setUser={setUser}
                    user={user}
                  />
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
                  <TouchableOpacity onPress={toggleSignin}>
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
    backgroundColor: "white",
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
    margin: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
