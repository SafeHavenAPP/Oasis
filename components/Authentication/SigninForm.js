import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';

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
      console.log(data) 
      setUser([...user, data])
      })
      .then(() => console.log('user',user))
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