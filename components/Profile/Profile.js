import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Modal, Button } from "react-native";
import LocationForm from "./locationForm/LocationForm.js";

export default function Profile() {
  const [showModal, setShowModal] = React.useState([false]);
  const [locations, setLocations] = React.useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    function fetchData() {
      try {
        fetch("https://oasis-server-app.herokuapp.com/locations", {
          method: "get",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setLocations([...locations, data])
          })
          .catch((error) => console.log(error));
      } catch (e) {
        console.log(e);
      }
    }
    fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Create A Location" onPress={toggleModal} />
      <View View style={styles.centeredView}>
        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Button title="X" onPress={toggleModal} />
              <LocationForm />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
