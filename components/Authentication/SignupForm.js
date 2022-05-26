import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';

export default function SignupForm({ toggleSignup, setUser, user }){

  const [username, setUsername] = React.useState('')
  const [fullName, setFullName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async () =>{
    try {
      let fetchedUser;
      fetch('https://oasis-server-app.herokuapp.com/auth/register', {
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
      })
      .then((response) => response.json())
      .then(data => {
      setUser([data]) 
      console.log(data)
      })  
      // .then(() => console.log('line 28',user))
      .catch(error => console.log(error))
      toggleSignup();
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