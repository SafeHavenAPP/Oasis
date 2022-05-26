import * as React from 'react';
import { Text, View, TextInput,  StyleSheet, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import jwt_decode from 'jwt-decode'


export default function SigninForm({ toggleSignin, setIsLoggedIn, isLoggedIn, user, setUser }) {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  const handleSubmit = async () => {
    try {
      fetch('https://oasis-server-app.herokuapp.com/auth/sign_in', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((response) => response.json())
      .then(data => {
        setUser([...user, jwt_decode(data.token)])
      })
      .catch(error => console.log(error))
      setIsLoggedIn(!isLoggedIn)
      toggleSignin();
    } catch(e){
      console.log(e);
    }
  }
  
  return (
    <View>
      <Text> Oasis Sign In  </Text>
      <View>
        <TextInput style={styles.input} onChangeText={setUsername}  placeholder="username" />
        <TextInput
          onChangeText={setPassword} 
          secureTextEntry={true}
          placeholder="password"
          style={styles.input}
          />
        <Switch 
          title='Submit' 
          onChange={handleSubmit}
          value={isLoggedIn}
          onValueChange={(value) => {
            console.log(value);
            EventRegister.emit('loggedIn', value)
          }} 
          />
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