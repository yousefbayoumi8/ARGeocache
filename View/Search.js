import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Scrollview,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import SearchInput, {createFilter} from 'react-native-search-filter';

export default function Search({clicked, searchPhrase, setSearchPhrase, setCLicked}) {
  const navigation = useNavigation();
  //const [username] = useState('');

  const onPressSearchUsers = async() => {
    console.log("Searching for users...");
    try {

    } catch (error) {
    }
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <Image
            source={require('../components/back.png')}
            style={{height: "75%", aspectRatio: 1, margin: 2, flexDirection: "row", justifyContent: "flex-start"}}
          />
          </TouchableOpacity>

          <TextInput
            style={styles.TextInput}
            placeholder="Search Users..."
            placeholderTextColor="#003f5c"
            onChangeText={setSearchPhrase}
          />

          <TouchableOpacity onPress={onPressSearchUsers}>
          <Image
            source={require('../components/Search.png')}
            style={{height: '75%', aspectRatio: 1, margin: 5, flexDirection: "row", justifyContent: "flex-end"}}
          />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );//TODO:  Implement backend call in onPress
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  },

   TextInput: {
      height: 'auto',
      alignItems: "center",
      flexGrow: 1,
      padding: 5,
      backgroundColor: '#FFF',
    },

  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    flex: 2,
    marginLeft: 100,
  },

  viewStyle: {
    backgroundColor: '#29b89e',
    width: '100%',
    height: '7%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});