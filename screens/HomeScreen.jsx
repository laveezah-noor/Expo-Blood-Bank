import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

function HomeScreen ({navigation}) {
  const cardHandler = () => {
    
  }
  console.log(navigation)
  return (
      <View style={styles.container}>
        <Text style={styles.subHead}>Give the gift of life</Text>
        <Text style={styles.head}>Donate Blood</Text>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity><Card icon="search" text="Find Donor" badge="200K"/></TouchableOpacity>
          <TouchableOpacity><Card icon="bell" text="Blood Request" badge="200K"/></TouchableOpacity>
        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity><Card icon="tint" text="Blood Bank" badge="Explore"/></TouchableOpacity>
          <TouchableOpacity><Card icon="cog" text="Other" badge="More"/></TouchableOpacity>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head:{
    fontSize: 30,
    fontWeight: "500",
    color: "red",
  },
  subHead:{
    fontSize: 20,
    textTransform: "uppercase"
  },
});

export default HomeScreen;