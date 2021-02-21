import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Card from '../components/Card'

const {width} = Dimensions.get('window');

const Details: () => React$Node = ({ route }) => {

    const { name, image, origin, status, species, gender, created } = route.params

  return (
    <View>
        <Card>
            <AutoHeightImage
                        width={width - 20}
                        source={{uri: image}}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.space}>
                Origin: <Text style={styles.textColor}>{origin.name}</Text>
            </Text>
            <Text style={styles.space}>
                Status: <Text style={styles.textColor}>{status}</Text>
            </Text>
            <Text style={styles.space}>
                Species: <Text style={styles.textColor}>{species}</Text>
            </Text>
            <Text style={styles.space}>
                Gender: <Text style={styles.textColor}>{gender}</Text>
            </Text>
            <Text style={styles.space}>
                Created: <Text style={styles.textColor}>{created}</Text>
            </Text>
        </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    },
    textColor: {
        color: 'blue'
    },
    space: {
        marginTop: 10,
        marginBottom: 10
    }
})

export default Details;