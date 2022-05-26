import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LocationForm({ fetchData, toggleCreate, user }) {

  const [locationName, setLocationName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [status, setStatus] = React.useState('')
   // Called fetchData in here to render the data real time after creation
  const handleSubmit = async () => {
    if(locationName && address){
    try {
      fetch('https://oasis-server-app.herokuapp.com/locations', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          locationName: locationName,
          address: address,
          status: status,
          username: user.username
        })
      })
      .then((response) => response.json())
      .then(() => {
        fetchData();
        toggleCreate();
      })
    .catch(error => console.log(error))
    } catch(e){
      console.log(e);
    }
  } else {
    Alert.alert('Must enter a location name and address!')
  }
  }

  return (
    <View>
      <Text style={styles.header}>Create A Location</Text>
      <TextInput textContentType='addressCity' style={styles.input} placeholder= "Location Name" onChangeText={setLocationName} />
      <TextInput style={styles.input} placeholder= "Address" onChangeText={setAddress} />
      {/* TODO: Update to switch */}
      <TextInput style={styles.input} placeholder= "Open-to-all Status" onChangeText={setStatus} />
      <Button title="Add Location" onPress={handleSubmit} />
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