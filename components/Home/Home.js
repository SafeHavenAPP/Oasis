import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import { StyleSheet, Button, View, SafeAreaView, Dimensions } from 'react-native';
import axios from 'axios';
import { YellowBox } from 'react-native-web';

export default function Home() {

  async function yelpMap(){
  const config = {
    headers: {
      Authorization:
        "Bearer AcgEMJYgCZy8PIs_282z29OYmlIjq_8QT-QiSa-VHdnmkzcSVCyL0Tny4KjEkh9XQdDyGj2zq_Dui_wNIC8JedqHu34B_BNj86MUkuBnPJczv5PDJtxAJkHoo34UYnYx",
    },
    params: {
      term: "restaurants",
      location: '1234 Street Street',
      radius: 1609,
      sort_by: "relevance",
      limit: 50,
    },
  };
  return(
   await axios
    .get("https://api.yelp.com/v3/businesses/search", config)
    .then((response) => {
      console.log(response); //These are the results sent back from the API!
    })
  )
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
        <View style={styles.container}>
          <MapView style={styles.map} />
        </View>
      <Button title='string' onPress={()=> yelpMap()}/>
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