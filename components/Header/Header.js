import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
// import ModalLogin from  '../Authentication/Modal.js'
import LoginForm from '../Authentication/LoginForm.js'


export default function Header() {
  // const [modalShown, setModalShown] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = () => {
    console.log('HERE----------')
    setIsModalVisible(!isModalVisible);
  };
  


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
      <Button onPress={ toggleModal } title='Login' />
      <View View style={styles.centeredView}>
        <Modal 
        visible = { isModalVisible } 
        animationType="slide"
        transparent={true}>  
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <LoginForm />
            <Button title='Submit' onPress={ toggleModal } onRequestClose={() => {
              Alert.alert("Attempting to Login");
              setIsModalVisible(!isModalVisible);
            }}/>
            </View>
          </View>
        </Modal>
      <Button title='Signup' />
      </View>
      </>
    }

    {/* {modalShown === true ?
    <>
      <ModalLogin />
    </>
    :null} */}

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
});