import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Image,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

export default function EditProfile() {
  const [username, setNewUsername] = useState('');
  const [password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const onPressSignUp = async () => {
    try {
        if(password === confirmPassword){
            if(password.length > 7){
                await user.functions.updateProfile(username, password, isSelected);
                navigation.navigate('MainMenu');
                alert('Profile successfully updated');
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../components/back.png')}
            style={{width: 35, height: 35, marginLeft: 2}}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Edit Profile</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            alert('Open Camera');
          }}>
          <Image source={require('../components/CameraButton.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="New Username"
            placeholderTextColor="#003f5c"
            onChangeText={username => setNewUsername(username)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="New Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setNewPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm New Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
          />
        </View>

        <View style={styles.checkboxContainer}>
            <Text style={styles.label}>Would you like your account to be private?</Text>
                <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                />
        </View>

        <TouchableOpacity
          style={styles.SaveButton}
          onPress={() => {
            alert('Changes Saved');
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.DeleteButton}
            onPress={() => {
                alert('Changes Saved');
            }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
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

  SaveButton: {
    width: '40%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2AAA8A',
    marginBottom: 20,
  },
  DeleteButton: {
      width: '40%',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#cc0000',
      marginBottom: 20,
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
  checkboxContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
