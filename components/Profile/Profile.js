import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import { NativeBaseProvider, Box, ScrollView } from 'native-base';
import LocationForm from "./locationForm/LocationForm.js";
import UpdateForm from "./UpdateForm.js";

export default function Profile() {
  const [showCreate, setShowCreate] = React.useState([false]);
  const [showUpdate, setShowUpdate] = React.useState([false]);
  const [locations, setLocations] = React.useState(null);
  const [locationToUpdate, setLocationToUpdate] = React.useState({})

  const toggleCreate = () => {
    setShowCreate(!showCreate);
  };

  const toggleUpdate = () => {
    setShowUpdate(!showUpdate);
  }

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
          setLocations(data)
        })
        .then(() => {
          console.log(locations)
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }

  // This is called at the "Delete A Location" button.  It re renders the locations as well
  const handleDelete = (id) => {

    try {
      fetch(`https://oasis-server-app.herokuapp.com/locations/${id}`, {
        method: "delete",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .then(() => {
          // This rerenders the data after deletion.  
          fetchData();
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }

  const handleUpdate = (location) => {
    toggleUpdate();
    setLocationToUpdate(location)
  }

  React.useEffect(() => {
    fetchData()
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button title="Create A Location" onPress={toggleCreate} />
        <View View style={styles.centeredView}>
          <Modal visible={showCreate} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                <Button title="Close" onPress={toggleCreate} color='crimson' />

                <LocationForm
                  fetchData={fetchData}
                  toggleCreate={toggleCreate}
                />
              </View>
            </View>
          </Modal>
          <ScrollView>
            {
              locations ?
                locations.map(location => (

                  <Box
                    key={location._id}
                    alignItems='center'
                    rounded='lg'
                    borderWidth='5'
                    borderColor='gray.500'
                    marginBottom={5}
                    padding={3}
                    height={250}
                  >
                    <Text>Location Name: {location.locationName}</Text>
                    <Text>Location Address: {location.address}</Text>
                    <Text>Status:  {location.status}</Text>
                    <Text>Username:  {location.username}</Text>
                    <View style={styles.boxButtonView}>
                      <Button title='Update A Location' onPress={() => handleUpdate(location)} />
                      <Button title='Delete A Location' onPress={() => handleDelete(location._id)} />
                    </View>
                  </Box>
                )) : null
            }
          </ScrollView>
        </View>
      </View>
      <Modal visible={showUpdate} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                <Button title="Close" onPress={toggleUpdate} color='crimson' />

                <UpdateForm
                  fetchData={fetchData}
                  toggleUpdate={toggleUpdate}
                  locationToUpdate={locationToUpdate}
                />
              </View>
            </View>
          </Modal>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
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
    width: 300,
    margin: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  boxButtonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },

});
