import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/header'



const Login= () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
    <Header name="Login"/>
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          />
      </View>

      <TouchableOpacity style={styles.SubmitButton} onPress={()=>{alert("New Profile Created")}}>
        <Text style={{fontWeight: "bold", color: "black"}}>Enter</Text>
      </TouchableOpacity>
    </View>
  </View>


  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 300,

  },
  inputView: {
    backgroundColor: "#96DED1",
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  SubmitButton: {
    width: "40%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2AAA8A",

  },
  });

export default Login;
