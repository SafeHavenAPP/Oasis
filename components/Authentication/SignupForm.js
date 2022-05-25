import * as React from 'react';
import axios from 'axios';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function SignupForm(){

  const [username, setUsername] = React.useState('')
  const [fullName, setFullName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async () =>{
    try {
      await fetch('https://oasis-server-app.herokuapp.com/auth/register', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          fullName: fullName,
          password: password
        })
      });
    } catch(e){
      console.log(e);
    }
  }



  return (
    <View>
      <Text> Oasis SignUp  </Text>
      <View>
        <TextInput style={styles.input} onChangeText={setFullName}  placeholder="Enter Full Name" />
        <TextInput style={styles.input} onChangeText={setUsername}  placeholder="Enter Username" />
        <TextInput
          onChangeText={setPassword} 
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.input}
        />
        <Button title='Submit' onPress={handleSubmit} />
      </View>
    </View>
  );
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