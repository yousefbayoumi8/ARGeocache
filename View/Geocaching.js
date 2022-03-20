import React, {useState} from 'react';
import MapView from "react-native-maps";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Geocaching() {
    const navigation = useNavigation();

    return (
      <View style={styles.body}>
        <View style={styles.viewStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
                <Image
                    source={require('../components/back.png')}
                    style={{width: 35, height: 35, marginLeft: 2}}
                />
            </TouchableOpacity>
            <Text style={styles.textStyle}>Geocaching</Text>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 45.949930787503014,
            longitude: -66.64158704743294,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    viewStyle: {
        backgroundColor: '#29b89e',
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    map: {
        width: "100%",
        height: "100%"
    }
});