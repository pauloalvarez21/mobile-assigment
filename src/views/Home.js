import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import Card from '../components/Card'
import Globals from '../utils/Globals';

const Home: () => React$Node = ({navigation}) => {

      const [isLoading, setLoading] = useState(true)
      const [data, setData] = useState([])

    useEffect(() => {
        fetch(Globals.BASE_URL)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.results)
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
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
            <Card>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Details", item)}
            >
            <Text>{item.name}</Text>
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
     }
})

export default Home;