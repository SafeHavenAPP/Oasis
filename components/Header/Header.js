import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
// import ModalLogin from  '../Authentication/Modal.js'
import SignupForm from '../Authentication/SignupForm.js'


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
      <Button title='Log out' />
      </>
      :
      <>
      <Button onPress={ toggleModal } title='SignUp' />
      <Button title='Login' />
      <View View style={styles.centeredView}>
        <Modal 
        visible = { isModalVisible } 
        animationType="slide"
        transparent={true}>  
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <SignupForm />
            <Button title='X' onPress={ toggleModal } onRequestClose={() => {
              setIsModalVisible(!isModalVisible);
            }}/>
            </View>
          </View>
        </Modal>
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
  // container: {
  //   backgroundColor:'#F8F8F8',
  //   justifyContent:'space-in',
  //   alignItems:'baseline',
  //   height: 60,
  //   borderWidth:0,
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
});