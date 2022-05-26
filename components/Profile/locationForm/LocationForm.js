import * as React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LocationForm({}) {

  const [locationName, setLocationName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [username, setUsername] = React.useState('')

  const handleSubmit = async () => {
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
          username: username
        })
      })
      .then((response) => response.json())
    .catch(error => console.log(error))
    } catch(e){
      console.log(e);
    }
  }

  return (
    <View>
      <TextInput style={styles.input} placeholder= "Location Name" onChangeText={setLocationName} />
      <TextInput style={styles.input} placeholder= "Address" onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder= "Status" onChangeText={setStatus} />
      <TextInput style={styles.input} placeholder= "Username" onChangeText={setUsername} />
      <Button title="Create" onPress={handleSubmit} />
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
});