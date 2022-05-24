import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { StyleSheet, Button, View, SafeAreaView, Dimensions } from 'react-native';
// import axios from 'axios';
// import { YellowBox } from 'react-native-web';
import HeaderView from '../Header/Header';

export default function Home({ navigation }) {

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


  
  return (
    <SafeAreaView style={styles.container}>
      <HeaderView />
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
        <View style={styles.container}>
          <MapView style={styles.map} />
        </View>
      <Button title='Profile' onPress={()=> navigation.navigate('Profile')}/>
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
    height: Dimensions.get('window').height,
  },
});
