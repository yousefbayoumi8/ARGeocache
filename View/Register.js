import React, {useState} from 'react';
import { useAuth } from "../providers/AuthProvider";
import { Alert } from "react-native";
import Realm from "realm";
import app from "../realmApp";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const { user, signUp, signIn } = useAuth();

  const onPressSignUp = async () => {
      try {
        if(password === confirmPassword){
            if(password.length > 7){
                await signUp(username, password);
                signIn(username, password);
                await user.functions.insertUser(username, password);
                navigation.navigate('MainMenu');
                alert('New Profile Created, you are now signed in');
            }
            else{
                Alert.alert('Password must be at least 8 characters long');
            }
        }
        else{
            Alert.alert('Passwords do not match, please try again');
        }
      } catch (error) {
        Alert.alert(`Failed to sign up: ${error.message}`);
      }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../components/back.png')}
            style={{width: 35, height: 35, marginLeft: 2}}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Create Your Profile</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={username => setUsername(username)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={confirmPassword =>setConfirmPassword(confirmPassword)}
          />
        </View>

        <TouchableOpacity
          style={styles.SubmitButton}
          onPress={onPressSignUp}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 300,
  },
  inputView: {
    backgroundColor: '#96DED1',
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  SubmitButton: {
    width: '40%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2AAA8A',
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
