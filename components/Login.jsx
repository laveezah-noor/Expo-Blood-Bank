import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import {TextInput} from 'react-native';
import {Form, Item, Input, Icon, Label, Button} from 'native-base'

function Login({ path }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
  return (
    <View>
      <View style={styles.LoginContainer}>
        <Text
          style={styles.LoginText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          NAME
        </Text>
        <TextInput
        onChangeText={(text)=>setName(text)}
        placeholder={"Enter Name"}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text
          style={styles.LoginText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          EMAIL ID
        </Text>
        <TextInput
        onChangeText={(text)=>setEmail(text)}
        placeholder={"Enter Email ID"}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text
          style={styles.LoginText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          MOBILE
        </Text>
        <TextInput
        onChangeText={(text)=>setPhone(text)}
        placeholder={"Enter Mobile"}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text
          style={styles.LoginText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          PASSWORD
        </Text>
        <TextInput
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}
        placeholder={"Enter Password"}/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <Form>
            <Item stackedLabel>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <View style={styles.inputContainer}>
              <Icon name="email"/>
              <View style={styles.separator} />
           {/* <View stackedLabel last> */}
              <Label >Username</Label>
              <Input />
           {/* </View> */}
        </View>
            <Button block><Text>Login</Text></Button>
          </Form>
    </View>
  );
}


export{
  Login,
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // separator: {
  //   marginVertical: 10,
  //   height: 1,
  //   width: '100%',
  // },
  LoginContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 50,
    width: 300
  },
  LoginText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#fff"
  },
  inputContainer:{
    flexDirection: "row"
  },
  separator:{
    marginHorizontal: 15,
    height: "50%",
    width: 1,
    backgroundColor: "#ccc"
  },
});
