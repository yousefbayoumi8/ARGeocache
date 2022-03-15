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

export default function MainMenu() {
//const navigation = useNavigation();
    return (
         <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
              <View style={styles.viewStyle}>
                <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
                  <Image source={require('./components/back.png')}
                    style={{width: 35, height: 35, marginLeft: 2}}
                  />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Welcome User_007</Text>
              </View>

            <View style={styles.ProfileContainer}>
                 <TouchableOpacity style={styles.ProfileStyle} activeOpacity={0.5}>
                    <Image source={require('./components/Profile.png')}
                    style={styles.ImageIconStyle}/>
                    <Text style={{fontWeight: "bold", color: "black"}}>Profile</Text>
                 </TouchableOpacity>

                  <TouchableOpacity style={styles.MapStyle} activeOpacity={0.5}>
                    <Image source={require('./components/Map.png')}
                    style={styles.ImageIconStyle}/>
                    <Text style={{fontWeight: "bold", color: "black"}}>Map</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.SearchStyle} activeOpacity={0.5}>
                    <Image source={require('./components/Search.png')}
                    style={styles.ImageIconStyle}/>
                    <Text style={{fontWeight: "bold", color: "black"}}>Search</Text>
                  </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
	CameraContainer: {
	backgroundColor: "#fff",
	alignItems: "center",
	marginTop: 50,
    },

    ProfileContainer: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 400,
    justifyContent: 'space-between'
    },

	ImageIconStyle: {
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


