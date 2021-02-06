import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Text, } from 'native-base';

export default function RequestCard(props) {
  const item = props.item;
  const patientName = item.patientName; 
  const patientAge = item.patientAge; 
  const patientGender = item.patientGender;
  const bloodGroup = item.bloodGroup;
  const status = item.status;
    return (
          <Card style={styles.container}>
            <CardItem style={styles.container}>
               <Icon status={status} bloodGroup={bloodGroup} />
               <View style={styles.textContainer}>
               <Text style={styles.name}>{patientName}</Text>
               <Text style={styles.details}>{patientAge} . {patientGender}</Text>
               </View>
            </CardItem>
         </Card>
    );
}

const Icon = (props) =>{
    
  return(
      <View style={styles.iconContainer}>
          <Text style={[styles.iconSub, {letterSpacing: 1}]}>{props.status}</Text>
          <Text style={styles.iconHead}>{props.bloodGroup}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 10,
  },
  textContainer:{
    paddingHorizontal: 15,
  },
  name:{ 

  },
  details:{ 
    fontSize: 12,
    color: "grey",
    paddingVertical: 4,
  },
  iconContainer:{
    margin: 5,
    width: 50,
    height: 60,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#aaa",
    borderRadius: 5
  },
  iconHead:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4
  },
  iconSub:{
    fontSize: 9,
    textTransform: "uppercase",
    backgroundColor: "red",
    color: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderRadius: 4,
  }
});