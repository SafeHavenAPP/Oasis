// import * as React from 'react';
// import axios from 'axios';
// // require('dotenv').config();
// // import { TextInput } from 'react-native';
// import { Box, Button, Input } from 'native-base'

// export default function YelpLocations() {
//   const [location, setLocation] = React.useState('')
//   const [results, setResults] = React.useState([])

//   const handleChange = (text) => {
//     setLocation(text)
//   }

//   // Not quite working yet, got it started.
//   // const handleSearch = async () => {
//   //   let url = process.env.YELP_URL
//   //   let headers = {
//   //     Authorization: `Bearer ${process.env.API_KEY}`
//   //   }
//   //   let results = await axios.get(`url?location=seattle&attributes=open_to_all`, headers)
//   //   console.log(results.data)
//   // }

//   const [restaurantData, setRestaurantData] = React.useState('');
//   const [city, setCity] = React.useState("San Francisco");
//   const [activeTab, setActiveTab] = React.useState("Delivery");

//   const YELP_API_KEY =
//   "aIQDS91E7qOSM_1waXHR6rb0lKq2xOj_NDRk2ltLlhfVISgPrN40M2PzOUny2hDzkwPqzRN6CZdQ-OFF4AmndQ2QOeuvLpCVsKsTt1SSghVEdZvO821mrDtypniPYnYx";
//   const getRestaurantsFromYelp = () => {
//     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=seattle`;

//     const apiOptions = {
//       headers: {
//         Authorization: `Bearer ${process.env.API_KEY}`,
//       },
//     };
//     return fetch(yelpUrl, apiOptions)
//       .then((res) => res.json())
//       .then((json) =>
//        console.log(json)
//       );
//   };
//   React.useEffect(() => {
//     getRestaurantsFromYelp();
//   }, [city, activeTab]);


//   return (
//     <Box 
//       alignItems='center'
//       w='100%'  
//     >
//       <Input 
//         type='text'
//         mx='2'
//         textAlign='center' 
//         placeholder='Search' 
//         onChangeText={handleChange}
//         w='75%'
//         InputRightElement={<Button 
//           // onPress={fetchData}
//           size='md'
//           colorScheme='primary'
//           >Search</Button>}
//         />
//     </Box>
//   )
// };
