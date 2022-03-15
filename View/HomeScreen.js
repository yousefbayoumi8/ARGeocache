import * as React from 'react';
import {
        SafeAreaView,
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>AR GEOCACHING</Text>
          </View>

            <View style={styles.container}>
                <Image source={require('./components/WelcomeIcon.png')} />

                <TouchableOpacity style={styles.LoginButton} onPress={()=> navigation.navigate('Login')}>
                    <Text style={{fontWeight: "bold", color: "black"}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.RegisterButton} onPress={()=> navigation.navigate('Register')}>
                    <Text style={{fontWeight: "bold", color: "black"}}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
	container: {
	backgroundColor: "#fff",
	alignItems: "center",
	marginTop: 30,
    },

	LoginButton: {
	width: "40%",
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#2AAA8A",
    marginTop: 10,
    },

    RegisterButton: {
    width: "40%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2AAA8A",
    marginTop: 10,
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



