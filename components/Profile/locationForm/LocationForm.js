import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Switch } from 'react-native';

export default function LocationForm({ fetchData, toggleCreate, user }) {

  const [locationName, setLocationName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [status, setStatus] = React.useState('Not Open')
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if(isEnabled === false){
      setStatus('Open')
    } else {
      setStatus('Not Open');
    }
    }

  const username = user[0].username
  const userID = user[0]._id

   // Called fetchData in here to render the data real time after creation
  const handleSubmit = async () => {
    if(locationName && address){
    try {
      console.log("this is the location user", user)
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
          username: username,
          userID: userID
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
    <View >
      <Text style={styles.modalTitle}>Create A Location</Text>
      <View style={styles.centeredView}>
        <TextInput 
          textContentType='addressCity' 
          style={styles.input} 
          placeholder= "Location Name" 
          placeholderTextColor='slategray'
          onChangeText={setLocationName} />
        <TextInput 
          style={styles.input} 
          placeholder= "Address" 
          placeholderTextColor='slategray'
          onChangeText={setAddress} />
          <Text>Open-To-All Status: {status}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#841584" }}
            thumbColor={isEnabled ? "#59c2ab" : "#064e3b"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        <Button 
          title="Add Location" 
          onPress={handleSubmit} 
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
  modalTitle: {
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