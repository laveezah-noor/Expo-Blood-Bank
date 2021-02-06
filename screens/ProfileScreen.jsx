import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Content, Card, CardItem, Thumbnail, Button, Label} from 'native-base';
import {connect} from 'react-redux'

function ProfileScreen({ navigation, route, profile }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  const name = profile.name;
  const dp = profile.dp;
  const bloodGroup = profile.bloodGroup;
  const gender = profile.gender;
  const dob = profile.dob;
  const no = profile.no;
  const email = profile.email;
  const height = profile.height;
  const weight = profile.weight;
  console.log(profile)
  return (
    <Content padder>
      <Card style={{flex: 0}}>
        <CardItem style={styles.container}>
          <View style={styles.profile}><Thumbnail square style={{resizeMode:"contain"}} source /></View>
          <Text style={styles.profileName}>{name}</Text>
        </CardItem>
        <CardItem style={{paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Gender</Label>
            <Text style={styles.labelText}>{gender}</Text>
          </View>
          <View style={styles.item}>
            <Label style={styles.label}>Blood Group</Label>
            <Text style={styles.labelText}>{bloodGroup}</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Date Of Birth</Label>
            <Text style={styles.labelText}>{dob}</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Email Address</Label>
            <Text style={styles.labelText}>{email}</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Phone Number</Label>
            <Text style={styles.labelText}>{no}</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Height</Label>
            <Text style={styles.labelText}>{height} cm</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Weight</Label>
            <Text style={styles.labelText}>{weight} kg</Text>
          </View>
        </CardItem>
      </Card>
    </Content>
  );
}

const mapStateToProps = (state) => {
  return{
  profile: state.auth.current_user,
  }
}

export default connect(
  mapStateToProps, null
  )(ProfileScreen);


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
