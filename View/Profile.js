import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        <TouchableOpacity>
          <Image
            source={require('../components/back.png')}
            style={{width: 35, height: 35, marginLeft: 2}}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>User Profile</Text>
        <TouchableOpacity onPress={() => navigation.push('EditProfile')}>
          <Image
            source={require('../components/edit.png')}
            style={{flex: 0.8, marginRight: 10}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Image source={require('../components/CameraButton.png')} />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
          Beginner Level | Joined: 2021
        </Text>
      </View>

      <View style={{alignItems: 'flex-start', marginLeft: 20, marginTop: 20}}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
          Rewards
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fffff',
    marginTop: 30,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    flex: 2,
    marginLeft: 25,
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
