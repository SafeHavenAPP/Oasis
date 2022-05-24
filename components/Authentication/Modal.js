import * as React from 'react';
import { Modal, StyleSheet } from "react-native";
import LoginForm from './LoginForm.js'


export default function ModalLogin() {
  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible}>
          <LoginForm />
          <Button title="Hide modal" onPress={toggleModal} />
      </Modal>  
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});