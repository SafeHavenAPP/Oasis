import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function SignupForm({ toggleSignup }) {
  const [username, setUsername] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    try {
      fetch("https://oasis-server-app.herokuapp.com/auth/register", {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          fullName: fullName,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.message){
            Alert.alert(data.message.message);
          } else{
            Alert.alert('You are signed up!')
          }
        })
        .catch((error) => console.log(error));
      toggleSignup();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text style={styles.modalTitle}> Oasis SignUp </Text>
      <View style={styles.centeredView}>
        <TextInput
          style={styles.input}
          onChangeText={setFullName}
          placeholder="Enter Full Name"
          placeholderTextColor='slategray'
        />
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          placeholder="Enter Username"
          placeholderTextColor='slategray'
        />
        <TextInput
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor='slategray'
          style={styles.input}
        />
        <Button 
          title="Submit" 
          onPress={handleSubmit}
          color='#064e3b'
          />
      </View>
    </View>
  );
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
