import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import Home from "./components/Home/Home.js";
import Profile from "./components/Profile/Profile.js";
import Header from "./components/Header/Header.js";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const Stack = createNativeStackNavigator();
  const [locations, setLocations] = React.useState(null);
  
   const handleLogout = () => {
    setIsLoggedIn(false);
    setUser([]);
  };

  //TODO: delete after user state is handled properly
  React.useEffect(() => {
    console.log("Contains User Info", user);
    console.log("State of Login", isLoggedIn);
  }, [user, isLoggedIn]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: () => (
            <Header
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              handleLogout={handleLogout}
            />
          ),
        }}
      >
        <Stack.Screen name="Home">
          {(props) => (
            <Home
              {...props}
              locations={locations}
              setLocations={setLocations}
              user={user}
              isLoggedIn={isLoggedIn}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Profile">
          {(props) => (
            <Profile
              {...props}
              locations={locations}
              setLocations={setLocations}
              user={user}
              isLoggedIn={isLoggedIn}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
