import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, ScrollView } from "native-base";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Dimensions,
  Text,
} from "react-native";
// import { NativeBaseProvider } from "native-base";
// import YelpLocations from "../searchYelp.js/YelpLocations";

export default function Home({
  locations,
  setLocations,
  navigation,
  isLoggedIn,
  user,
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

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="auto" barStyle="#fff" />
        </View>
        {/* <NativeBaseProvider> */}
        {/* <YelpLocations /> */}
        {/* </NativeBaseProvider> */}
        <View>
          {isLoggedIn === true ? (
            <Button
              color="#841584"
              title="Profile"
              onPress={() => navigation.navigate("Profile")}
            />
          ) : null}
        </View>
        <View>
          <ScrollView>
            {locations
              ? locations.map((location) => (
                  <Box
                    key={location._id}
                    alignItems="center"
                    rounded="lg"
                    borderWidth="5"
                    borderColor="gray.500"
                    marginBottom={5}
                    padding={3}
                    height={250}
                  >
                    <Text>Location Name: {location.locationName}</Text>
                    <Text>Location Address: {location.address}</Text>
                    <Text>Status: {location.status}</Text>
                    <Text>Username: {location.username}</Text>
                  </Box>
                ))
              : null}
          </ScrollView>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // map: {
  //   width: Dimensions.get("window").width,
  //   height: 600,
  // },
});
