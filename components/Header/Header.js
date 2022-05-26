import * as React from "react";
import {
  StyleSheet,
  View,
  Button,
  Modal,
} from "react-native";
import SignupForm from "../Authentication/SignupForm.js";
import SigninForm from "../Authentication/SigninForm.js";

export default function Header({ user, setUser, isLoggedIn, setIsLoggedIn }) {

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
            <Button onPress={toggleModalSignin} title="Sign In" value={isLoggedIn} />
            <Button onPress={toggleModalSignup} title="Sign Up" />
          </View>
          <View View style={styles.centeredView}>
            <Modal
              visible={isSignupVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Button title="Close" onPress={toggleModalSignup} />
                  <SignupForm
                    toggleSignup={toggleModalSignup}
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
                <Button title="Close" onPress={toggleModalSignin} />
                  <SigninForm
                    toggleSignin={toggleModalSignin}
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
