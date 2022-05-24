
export default function ModalLogin() {
  
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