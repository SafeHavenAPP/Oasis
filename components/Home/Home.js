import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, useColorMode, ScrollView, Box} from "native-base";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from "react-native";


export default function Home({
  locations,
  setLocations,
  navigation,
  isLoggedIn,
}) {



  function fetchData() {
    try {
      fetch("https://oasis-server-app.herokuapp.com/locations", {
        method: "get",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setLocations(data);
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  const {
    toggleColorMode
  } = useColorMode();
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="auto" barStyle="#fff" />
        </View>
        <ScrollView>
        <View style={styles.profileButton}>
          {isLoggedIn === true ? (
          
            <Button
              color="#841584"
              title="Profile"
              onPress={() => navigation.navigate("Profile")}
            />
          ) : null}
          </View>
          <View style={styles.container}>
          <Text style={styles.aboutText}>Welcome to Oasis, a space to share any 'Open to all' businesses, restaurants, or general locations that you can think of. </Text>
          <Text style={styles.aboutText2}>Simply sign up and contribute to our growing collection of all-inclusive spots!</Text>
          </View>
          <View>
            {locations
              ? locations.map((location) => (
                <Box
                  key={location._id}
                  alignItems="center"
                  rounded="lg"
                  borderWidth="5"
                  borderColor='#064e3b'
                  backgroundColor='#a8ffec'
                  marginBottom={5}
                  padding={3}
                  height={150}
                >
                  <Text style={styles.text}>Location Name: {location.locationName}</Text>
                  <Text style={styles.text}>Location Address: {location.address}</Text>
                  <Text style={styles.text}>Open To All: {location.status}</Text>
                  <Text style={styles.text}>Created By: {location.username}</Text>
                </Box>
              ))
              : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#59c2ab",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutText: {
    fontWeight: 'bold',
    fontSize: 25 ,
    margin: 5,
    marginBottom: 10,
    textAlign: 'center',
    color: '#064e3b',
  },
  aboutText2: {
    fontWeight: 'bold',
    fontSize: 25 ,
    margin: 5,
    marginBottom: 10,
    textAlign: 'center',
    color: '#064e3b',
    borderBottomWidth: 5,
    borderBottomColor:'#c96747'
  },
  homeTitle: {
    marginRight: 'auto',
    fontSize: 30,
    paddingTop: 25,
    marginBottom: 25,
  },
  profileButton: {
    marginBottom: 15,
    marginTop: 15
  },
  text: {
    color: '#c96747',
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold'
  }
});
