import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Content, Card, CardItem, Input, Thumbnail, Button, Label} from 'native-base';
import {connect} from 'react-redux'
import {set_Profile} from '../redux/action'

function EditProfileInfo({ navigation, route, profile }) {
  const [newProfile, setProfile] = React.useState({
    name: "",
      dp: "",
      gender: "",
      bloodGroup: "",
      dob: "",
      email: "",
      no: "",
      height: "",
      weight: ""
  });
  const [name, setName] = React.useState(profile.name);
  const [dp, setDp] = React.useState(profile.dp);
  const [bGroup, setBGroup] = React.useState(profile.bloodGroup);
  const [gender, setGender] = React.useState(profile.gender);
  const [dob, setDob] = React.useState(profile.dob);
  const [no, setNo] = React.useState(profile.no);
  const [email, setEmail] = React.useState(profile.email);
  const [height, setHeight] = React.useState(profile.height);
  const [weight, setWeight] = React.useState(profile.weight);
  const submit = () =>{
    
      console.log(name, dp,)
  }
  console.log(name, bGroup, gender, dob, no, email, height, weight)
  return (
    
    <Content padder>
      <Card style={{flex: 0}}>
        <CardItem style={styles.container}>
          <View style={styles.profile}><Thumbnail square style={{resizeMode:"contain"}} source /></View>
          <Input placeholder={name} onChangeText={(txt)=>setName(txt)} style={styles.labelText}/>
        </CardItem>
        <CardItem style={{paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Gender</Label>
            <Input placeholder={gender} style={styles.labelText} onChangeText={(txt)=>setGender(txt)} />
          </View>
          <View style={styles.item}>
            <Label style={styles.label}>Blood Group</Label>
            <Input placeholder={bGroup} style={styles.labelText} onChangeText={(txt)=>setBGroup(txt)}/>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Date Of Birth</Label>
            <Input placeholder={dob} style={styles.labelText} onChangeText={(txt)=>setDob(txt)}/>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Email Address</Label>
            <Input placeholder={email} style={styles.labelText} onChangeText={(txt)=>setEmail(txt)} />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Phone Number</Label>
            <Input placeholder={no} style={styles.labelText} onChangeText={(txt)=>setNo(txt)} />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Height</Label>
            <Input placeholder={height} style={styles.labelText} onChangeText={(txt)=>setHeight(txt)} />
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Weight</Label>
            <Input placeholder={weight} style={styles.labelText} onChangeText={(txt)=>setWeight(txt)} />
          </View>
        </CardItem>
      </Card>
      <Button onPress={()=>submit()}><Text>Change Profile</Text></Button>
    </Content>
  );
}

const mapStateToProps = (state) => {
  return{
  profile: state.auth.current_user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  set_Profile: (newProfile) => dispatch(auth.set_Profile(newProfile))
})

export default connect(
  mapStateToProps, mapDispatchToProps
  )(EditProfileInfo);



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
  