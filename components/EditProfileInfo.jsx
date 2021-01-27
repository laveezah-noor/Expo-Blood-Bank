import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Content, Card, CardItem, Input, Thumbnail, Button, Label} from 'native-base';

export default function EditProfileInfo({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    
    <Content padder>
      <Card style={{flex: 0}}>
        <CardItem style={styles.container}>
          <View style={styles.profile}><Thumbnail square style={{resizeMode:"contain"}} source /></View>
          <Input placeholder="Name" style={styles.labelText}/>
        </CardItem>
        <CardItem style={{paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Gender</Label>
            <Input style={styles.labelText} placeholder="Male" />
          </View>
          <View style={styles.item}>
            <Label style={styles.label}>Blood Group</Label>
            <Input style={styles.labelText} placeholder="A+" />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Date Of Birth</Label>
            <Input style={styles.labelText} placeholder="01-01-2001" />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Email Address</Label>
            <Input style={styles.labelText} placeholder="example@company.com" />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Phone Number</Label>
            <Input style={styles.labelText} placeholder="03333302154" />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Height</Label>
            <Input style={styles.labelText} placeholder="150 cm" />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Weight</Label>
            <Input style={styles.labelText} placeholder="50 kg" />
          </View>
        </CardItem>
      </Card>
    </Content>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column"
    },
    profile:{
      width: 80,
      height: 80,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "gray",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.58,
      shadowRadius: 15.00,
  
      elevation: 24,
    },
    profileName: {
      fontSize: 15
    },
    item:{
      borderWidth: 1,
      borderColor: "#ddd",
      flex: 1,
      padding: 10,
      borderRadius: 2,
    },
    label:{
      color: "gray",
      fontSize: 12
    },
    labelText: {
      fontSize: 15,
      paddingTop: 9
    }
  });
  