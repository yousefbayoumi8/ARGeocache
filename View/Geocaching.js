import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RNLocation from 'react-native-location';
import {useNavigation} from '@react-navigation/native';
import Realm, {User} from 'realm';
import app from '../realmApp';
import {useAuth} from '../providers/AuthProvider';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  LogBox,
  PermissionsAndroid,
} from 'react-native';

export default function Geocaching() {
  LogBox.ignoreAllLogs();
  const navigation = useNavigation();
  const {user} = useAuth();
  const [currentLongitude, setCurrentLongitude] = useState(-66.64159932959872);
  const [currentLatitude, setCurrentLatitude] = useState(45.94995093187056);
  const [locationStatus, setLocationStatus] = useState('');
  const [geocacheList, setGeocacheList] = useState([]);
  watchID: number = null;
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
    getCoordinates();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getCoordinates = async () => {
    try {
        const geocacheList = await user.functions.getGeocacheCoordinates();
        setGeocacheList(geocacheList);
        console.log('printing coordinates');
        console.log(geocacheList);
    } catch (err) {
        console.warn(err);
    }
  };

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    console.log('Getting location...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');
        console.log('You are here');
        const currentLongitude = position.coords.longitude;
        //getting the Longitude from the location json
        const currentLatitude = position.coords.latitude;
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        console.log('You are here');
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        console.log(currentLongitude);
        console.log(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => {
        console.log('error');
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 2000},
    );
    console.log('here');
    console.log(currentLongitude);
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are Here');
        //Will give you the location on location change
        console.log(position);
        const currentLongitude = position.coords.longitude;
        //getting the Longitude from the location json
        const currentLatitude = position.coords.latitude;
        //getting the Latitude from the location json
        setCurrentLongitude(currentLongitude);
        //Setting state Longitude to re re-render the Longitude Text
        setCurrentLatitude(currentLatitude);
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => {
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: false, maximumAge: 1000},
    );
  };

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
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          description="You are here"
          coordinate={{latitude: currentLatitude, longitude: currentLongitude}}>
          <Image
            source={require('../components/Profile.png')}
            style={styles.ImageIconStyle}
          />
        </Marker>
      </MapView>
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
    width: '100%',
    height: '100%',
  },
});