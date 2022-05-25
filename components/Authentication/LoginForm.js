import React, {useState} from 'react';
import axios from 'axios';
import { Text, View, TextInput, Button} from 'react-native';

export default function LoginForm(){

  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')

  
  const handleSubmit = async () => {
    try {
      // let url = 'http://localhost:3001/auth/register'
      // let data = {
      //   username,
      //   fullName,
      //   password
      // }

      const config = {
        method: 'post',
        url: 'http://10.0.2.2:3001/auth/register',
        data: {
          username,
          fullName,
          password
        },
        timeout: 5000
      }

      axios(config)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
  
    } catch (error) {
      console.log('Error Registering', error.message);
    }
  }
  return (
    <View>
      <Text> Login Form </Text>
      <View>
        <TextInput onChangeText={setFullName}  placeholder="Enter Full Name" />
        <TextInput onChangeText={setUsername}  placeholder="Enter Username" />
        <TextInput
          onChangeText={setPassword} 
          secureTextEntry={true}
          placeholder="Enter Password"
        />
        <Button title='Submit' onPress={handleSubmit} />
      </View>
    </View>
  );
}