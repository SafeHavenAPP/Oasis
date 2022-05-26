import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { StyleSheet, Button, View, SafeAreaView, Dimensions } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
// import axios from 'axios';
// import { YellowBox } from 'react-native-web';

export default function Home({ navigation }) {

  const [showProfile, setShowProfile] = React.useState(false);

  React.useEffect(() => {
    console.log('profile', showProfile)
    let eventListener = EventRegister.addEventListener('loggedIn', (data) => {
      setShowProfile(data)
      console.log(data)
    });
    return () => {
      EventRegister.removeEventListener(eventListener)
    }
  })

  // async function yelpMap(){
  // const config = {
  //   headers: {
  //     Authorization:
  //       "Bearer ",
  //   },
  //   params: {
  //     term: "restaurants",
  //     location: '1234 Street Street',
  //     radius: 1609,
  //     sort_by: "relevance",
  //     limit: 50,
  //   },
  // };
  // return(
  //  await axios
  //   .get("https://api.yelp.com/v3/businesses/search", config)
  //   .then((response) => {
  //     console.log(response); //These are the results sent back from the API!
  //   })
  // )
  // }


  // React.useEffect(() => {
  //   console.log('home',JSON.stringify(isLoggedIn))
  // }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style='auto' barStyle='#fff' />
      </View>
      <View>
        {
          showProfile === true ?
        <Button
          color="#841584"
          title='Profile'
          onPress={() => navigation.navigate('Profile')} />
          : null
        }


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 600,
  }
});
