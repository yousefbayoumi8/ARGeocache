import React, {useState, useEffect} from 'react';
import { useAuth } from "../providers/AuthProvider.js";
import { Alert } from "react-native";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MainMenu({route}) {
  const navigation = useNavigation();
  const { username } = route.params;
  const [password, setPassword] = useState('');
  const { user, signOut } = useAuth();
  const onPressSignOut = async () => {
        console.log("Press sign out");
        console.log(username);
        try {
          await signOut(username, password);
          navigation.navigate('HomeScreen');
        } catch (error) {
          console.log("Failed to sign out");
          Alert.alert(`Failed to sign in: ${error.message}`);
        }
    };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={onPressSignOut}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Welcome</Text>
      </View>

      <View style={styles.CameraContainer}>
        <Image
          source={require('../components/WelcomeIcon.png')}
          style={{
            height: 225,
            width: 225,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.ProfileContainer}>
        <TouchableOpacity
          style={styles.ProfileStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../components/Profile.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{fontWeight: 'bold', color: 'black'}}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.MapStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Geocaching', {username: username})}>
          <Image
            source={require('../components/Map.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{fontWeight: 'bold', color: 'black'}}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SearchStyle} activeOpacity={0.5}>
          <Image
            source={require('../components/Search.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{fontWeight: 'bold', color: 'black'}}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CameraContainer: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70,
  },

  ProfileContainer: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 350,
    justifyContent: 'space-between',
  },

  ImageIconStyle: {
    flex: 1,
    padding: 15,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },

  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    flex: 2,
  },
  viewStyle: {
    backgroundColor: '#29b89e',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
