import * as React from 'react';
import { Text, View, TextInput,  StyleSheet, Alert, Button} from 'react-native';
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
        if(data.token){
          setUser([...user, jwt_decode(data.token)])
          setIsLoggedIn(!isLoggedIn)
        } else{
          Alert.alert(data)
        }
      })
      .catch(error => console.log(error))
      toggleSignin();
    } catch(e){
      console.log(e);
    }
  }
  
  return (
    <View>
      <Text style={styles.modalTitle}> Oasis Sign In  </Text>
      <View>
        <TextInput 
          style={styles.input} 
          onChangeText={setUsername}  
          placeholder="username"
          placeholderTextColor='slategray'
          />
        <TextInput
          onChangeText={setPassword} 
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor='slategray'
          style={styles.input}
          />
        <Button 
          title='Submit' 
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
    borderWidth: 1,
    padding: 10,
    color: 'black'
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#c96747'
  }
});