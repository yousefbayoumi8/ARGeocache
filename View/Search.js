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

//import SearchInput, {createFilter} from 'react-native-search-filter';

export default function Search({clicked, searchPhrase, setSearchPhrase, setCLicked}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
          <TouchableOpacity onPress={''}>
          <Image
            source={require('./components/back.png')}
            style={{width: 35, height: 35, marginLeft: 2}}
          />
          </TouchableOpacity>

          <TextInput
            style={styles.TextInput}
            placeholder="Search User(s)"
            placeholderTextColor="#003f5c"
            onChangeText={setSearchPhrase}
          />

          <TouchableOpacity onPress={''}>
          <Image
            source={require('./components/Search.png')}
            style={{width: 35, height: 35, marginLeft: 215}}
          />
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  },

   TextInput: {
      height: 50,
      alignItems: "center",
      padding: 10,
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
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
});