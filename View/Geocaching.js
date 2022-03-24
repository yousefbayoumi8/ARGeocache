import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RNLocation from 'react-native-location';
import {useNavigation} from '@react-navigation/native';
import Realm, {User} from 'realm';
import app from '../realmApp';
import {useAuth} from '../providers/AuthProvider';
import { Alert } from "react-native";
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

export default function Geocaching({route}) {
  LogBox.ignoreAllLogs();
  const navigation = useNavigation();
  const {user} = useAuth();
  const { username } = route.params;
  const [currentLongitude, setCurrentLongitude] = useState(-66.64159932959872);
  const [currentLatitude, setCurrentLatitude] = useState(45.94995093187056);
  const [locationStatus, setLocationStatus] = useState('');
  const [geocacheList, setGeocacheList] = useState([]);
  const [geocacheID, setGeocacheID] = useState('');
  const [geoLong, setGeoLong] = useState(0);
  const [geoLat, setGeoLat] = useState(0);
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
    const getCoordinates = async () => {
      try {
         const geocacheList = await user.functions.getGeocacheCoordinates();
         setGeocacheList(geocacheList);
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

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus('You are Here');
        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        console.log('error');
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 2000},
    );
    console.log(currentLongitude);
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are Here');
        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: false, maximumAge: 1000},
    );
  };

  const pickupGeocache = async event => {
    //if(Math.sqrt(Math.pow(currentLatitude-geoLat ,2) +Math.pow(currentLongitude-geoLong,2) ) <= 0.001){
        try{
            console.log("picking up geocache");
            console.log(username);
            console.log(geocacheID);
            await user.functions.pickUpGeocache(username, geocacheID);
            await user.functions.updateGeocache(geocacheID, 0, 0);
        } catch (err) {
           console.warn(err);
        }
    //}
    //else{
    //    Alert.alert("Not in range of geocache");
    //}
  }
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
        }}
        showsUserLocation={true}>
        {geocacheList.map((item) => {return(
            <Marker
                key={item.name}
                title={item.name}
                coordinate={{
                    latitude: item.coordinate.latitude,
                    longitude: item.coordinate.longitude,
                }}
                onPress={() => {
                    setGeocacheID(item.geocache_id);
                    pickupGeocache();
                }}
            />)
        })}
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
  ImageIconStyle: {
      flex: 1,
      padding: 15,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
});