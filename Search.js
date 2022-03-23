import React from 'react';
import { useAuth } from '../providers/AuthProvider'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import SearchInput, {createFilter} from 'react-native-search-filter';
import {SearchBar} from 'react-native-elements';

export default function Search({clicked, searchPhrase, setSearchPhrase, setCLicked}) {
  const navigation = useNavigation();
  const { user, searchUsers } = useAuth();

  const onPressSearchUsers = async () => {
    console.log("Search Phrase: " + searchPhrase);
    if ((searchPhrase == "")) {
        alert('Please enter a username.');
    } else {
        console.log("Searching for users...");
        try {
          await searchUsers(searchName);

        } catch (error) {
            console.log("ERROR");
        }
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

      <ScrollView style={styles.scrollStyle}>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
        <Text style={styles.scrollEntry}>Sample Profile 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 6</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 7</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 8</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 9</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 10</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 11</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 12</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 13</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 14</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 15</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 16</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 17</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 18</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 19</Text>
        </TouchableOpacity>

        <TouchableOpacity
            width="90%"
            onPress={() => navigation.navigate('ViewProfile')}>
          <Text style={styles.scrollEntry}>Sample Profile 20</Text>
        </TouchableOpacity>

      </ScrollView>

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

  scrollStyle: {
    flex: 1,
  },

  scrollEntry: {
    margin: '2%',
    width: '90%',
    fontSize: 20,
    fontWeight: '400',
    color: '#04120f',
    flex: 2,
    marginLeft: '5%',
  }
});
