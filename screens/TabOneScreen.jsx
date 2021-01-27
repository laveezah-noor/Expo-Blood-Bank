import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Login} from '../components/Login';
import { Text, View } from '../components/Themed';
import Card from '../components/Card'

export default function HomeScreen() {
  return (
    <View >
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <Login path="/screens/HomeScreen.tsx" /> */}
      {/* <FloatingLabelExample/> */}
      {/* <Card icon="search" text="Text" badge="200K"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
