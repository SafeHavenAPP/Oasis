// import React, {useState} from 'react';
import { Text, View, TextInput} from 'react-native';

export default function LoginForm(){
  return (
    <View>
      <Text> Login Form </Text>
      <View>
        <TextInput placeholder="Enter Username" />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
    </View>
  );
}