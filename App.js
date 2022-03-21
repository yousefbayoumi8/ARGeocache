import React from 'react';
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AuthProvider } from "./providers/AuthProvider.js";
import HomeScreen from './View/HomeScreen';
import Login from './View/Login';
import Register from './View/Register';
import MainMenu from './View/MainMenu';
import Profile from './View/Profile';
import EditProfile from './View/EditProfile';
import MapView from "react-native-maps";
import Geocaching from './View/Geocaching';
import Search from './View/Search';
import Geolocation from '@react-native-community/geolocation';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Geocaching" component={Geocaching} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
    </AuthProvider>
  );
}
