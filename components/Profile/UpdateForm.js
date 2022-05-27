import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// This form can update our saved locations and re render real time
export default function UpdateForm({ locationToUpdate, toggleUpdate, fetchData }) {

  // Setting our state to the selected location data
  const [locationName, setLocationName] = React.useState(locationToUpdate.locationName)
  const [address, setAddress] = React.useState(locationToUpdate.address)
  const [status, setStatus] = React.useState(locationToUpdate.status)
  const [username, setUsername] = React.useState(locationToUpdate.username)

  const updateLocation = async (location) => {
    try {
      fetch(`https://oasis-server-app.herokuapp.com/locations/${locationToUpdate._id}`, {
        method: "put",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationName,
          address,
          status,
          username,
          userID: locationToUpdate.userID
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .then(() => {
          // This rerenders the data after deletion.  
          fetchData();
          toggleUpdate()
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    // I set a default value here so that if unchanged by the user, it persists in the database
    <View>
      <Text style={styles.header}>Update A Location</Text>
      <View style={styles.centeredView}>
        <Text>Location Name</Text>
        <TextInput style={styles.input} defaultValue={locationToUpdate.locationName} onChangeText={setLocationName} />
        <Text>Update Address</Text>
        <TextInput style={styles.input} defaultValue={locationToUpdate.address} onChangeText={setAddress} />
        <Text>Update Open Status</Text>
        <TextInput style={styles.input} defaultValue={locationToUpdate.status} onChangeText={setStatus} />
        <Button 
          title="Update" 
          onPress={updateLocation} 
          color='#064e3b'
          />
        </View>
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 200, 
    borderWidth: 1,
    padding: 10,
    color: 'black'
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#c96747',
    fontWeight: 'bold'
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  }
});