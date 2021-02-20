import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Details: () => React$Node = ({navigation, route}) => {

    console.log(route)
    const {name } = route.params

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Details;