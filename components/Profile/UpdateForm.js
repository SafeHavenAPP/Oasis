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
          username
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
      <TextInput style={styles.input} defaultValue={locationToUpdate.locationName} onChangeText={setLocationName} />
      <TextInput style={styles.input} defaultValue={locationToUpdate.address} onChangeText={setAddress} />
      <TextInput style={styles.input} defaultValue={locationToUpdate.status} onChangeText={setStatus} />
      <TextInput style={styles.input} defaultValue={locationToUpdate.username} onChangeText={setUsername} />
      <Button title="Update" onPress={updateLocation} />
    </View>
  )

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black'
  },
  header: {
    alignSelf: 'center',
    fontSize: 20
  }
});