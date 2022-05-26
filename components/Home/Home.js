import * as React from "react";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
// import { NativeBaseProvider } from "native-base";
import { EventRegister } from "react-native-event-listeners";
// import YelpLocations from "../searchYelp.js/YelpLocations";

export default function Home({ navigation, isLoggedIn }) {
  const [showProfile, setShowProfile] = React.useState(false);

  return (
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
        <MapView style={styles.map} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 600,
  },
});
