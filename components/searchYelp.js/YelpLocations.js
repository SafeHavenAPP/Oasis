import * as React from 'react';
import axios from 'axios';
// import { TextInput } from 'react-native';
import { Box, Button, Input } from 'native-base'

export default function YelpLocations() {
  const [location, setLocation] = React.useState('')
  const [results, setResults] = React.useState([])

  const handleChange = (text) => {
    setLocation(text)
  }

  // Not quite working yet, got it started.
  const handleSearch = async () => {
    let url = process.env.YELP_URL
    let headers = {
      Authorization: `Bearer ${process.env.API_KEY}`
    }
    let results = await axios.get(`url?location=seattle&attributes=open_to_all`, headers)
    console.log(results.data)
  }

  return (
    <Box 
      alignItems='center'
      w='100%'  
    >
      <Input 
        type='text'
        mx='2'
        textAlign='center' 
        placeholder='Search' 
        onChangeText={handleChange}
        w='75%'
        InputRightElement={<Button 
          onPress={handleSearch}
          size='md'
          colorScheme='primary'
          >Search</Button>}
        />
    </Box>
  )
};
