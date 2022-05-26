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
import { EventRegister } from "react-native-event-listeners";

export default function Home({ navigation }) {
  const [showProfile, setShowProfile] = React.useState(false);

  React.useEffect(() => {
    let eventListener = EventRegister.addEventListener("loggedIn", (data) => {
      setShowProfile(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" barStyle="#fff" />
      </View>
      <View>
        {showProfile === true ? (
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
