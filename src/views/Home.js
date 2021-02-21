import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import Card from '../components/Card'
import Globals from '../utils/Globals';

const {width} = Dimensions.get('window');

const Home: () => React$Node = ({navigation}) => {

      const [isLoading, setLoading] = useState(true)
      const [data, setData] = useState([])

    useEffect(() => {
        fetch(Globals.BASE_URL)
            .then((response) => response.json())
            .then((json) => {
                setData(json.results)
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() => setLoading(false))
    })

  return (
    <View style={styles.contenedor}>
      {isLoading ? (
        <ActivityIndicator/>
      ) : (
      <FlatList
        data={data}
        keyExtractor={( id , index) => index.toString()}
        renderItem={({ item }) => (
            <Card>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Details", item)}
            >
            <Text style={styles.title}>{item.name}</Text>
            <AutoHeightImage
                        width={width - 50}
                        source={{uri: item.image}}
            />
            <Text style={styles.space}>
                Origin: <Text style={styles.textColor}>     {item.origin.name}</Text>
            </Text>
            <Text>
                Created: <Text style={styles.textColor}>  {item.created}</Text>
            </Text>
            </TouchableOpacity>
            </Card>
        )}
      />)
    }
    </View>
  );
};

const styles = StyleSheet.create({
     contenedor: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
     },
     title: {
         fontWeight: 'bold',
         marginBottom: 10,
         marginTop: 10
     },
     textColor: {
         color: 'blue'
     },
     space: {
         marginTop: 10,
         marginBottom: 10
     }
})

export default Home;