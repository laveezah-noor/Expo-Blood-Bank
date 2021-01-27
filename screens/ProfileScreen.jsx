import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Content, Card, CardItem, Input, Thumbnail, Button, Label} from 'native-base';
import EditProfileInfo from '../components/EditProfileInfo'

function Profile({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <Content padder>
      <Card style={{flex: 0}}>
        <CardItem style={styles.container}>
          <View style={styles.profile}><Thumbnail square style={{resizeMode:"contain"}} source /></View>
          <Text style={styles.profileName}>Name</Text>
        </CardItem>
        <CardItem style={{paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Gender</Label>
            <Text style={styles.labelText}>Male</Text>
          </View>
          <View style={styles.item}>
            <Label style={styles.label}>Blood Group</Label>
            <Text style={styles.labelText}>A+</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Date Of Birth</Label>
            <Text style={styles.labelText}>01-01-2001</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Email Address</Label>
            <Text style={styles.labelText}>example@company.com</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Phone Number</Label>
            <Text style={styles.labelText}>03333302154</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Height</Label>
            <Text style={styles.labelText}>150 cm</Text>
          </View>
        </CardItem>
        <CardItem style={{paddingTop:0, paddingBottom:0}}>
          <View style={styles.item}>
            <Label style={styles.label}>Weight</Label>
            <Text style={styles.labelText}>50 kg</Text>
          </View>
        </CardItem>
      </Card>
    </Content>
  );
}



const Stack = createStackNavigator();

export default function ProfileScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Profile" component={Profile} 
        options={({ navigation, route }) => ({
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditProfile')}
              info
            >Edit</Button>
          ),
          })} />
        <Stack.Screen name="EditProfile" component={EditProfileInfo} />
      </Stack.Navigator>
    </NavigationContainer>
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
