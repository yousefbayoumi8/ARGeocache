import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) =>{
    return <View style={styles.viewStyle}><Text style={styles.textStyle}>{props.name}</Text></View>
};

const styles = {
  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    marginLeft: 40,
    flex: 2,
  },
  viewStyle: {
    backgroundColor: '#29b89e',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },


}
export default Header;