// import * as WebBrowser from 'expo-web-browser';
// import React from 'react';
// import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
// // import { Text, View } from './Themed';
// import {TextInput} from 'react-native';
// import {Form, Item, Input, Icon, Label, Button} from 'native-base'
// import { connect } from 'react-redux';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-community/google-signin';
// // import { LoginManager, AccessToken } from 'react-native-fbsdk';

// function Login({ path }) {
//     const [name, setName] = React.useState("");
//     const [email, setEmail] = React.useState("");
//     const [phone, setPhone] = React.useState("");
//     const [password, setPassword] = React.useState("");
    
//     async function onGoogleButtonPress() {
//       // Get the users ID token
//       const { idToken } = await GoogleSignin.signIn();
    
//       // Create a Google credential with the token
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
//       // Sign-in the user with the credential
//       return auth().signInWithCredential(googleCredential);
//     }
//     // async function onFacebookButtonPress() {
//     //   // Attempt login with permissions
//     //   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
//     //   if (result.isCancelled) {
//     //     throw 'User cancelled the login process';
//     //   }
    
//     //   // Once signed in, get the users AccesToken
//     //   const data = await AccessToken.getCurrentAccessToken();
    
//     //   if (!data) {
//     //     throw 'Something went wrong obtaining access token';
//     //   }
    
//     //   // Create a Firebase credential with the AccessToken
//     //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
//     //   // Sign-in the user with the credential
//     //   return auth().signInWithCredential(facebookCredential);
//     // }
//     const google_login = () => {
//       return(dispatch) =>{
//           var provider = new firebase.auth.GoogleAuthProvider();
//           firebase.auth().signInWithPopup(provider).then(function(result) {
//               // This gives you a Google Access Token. You can use it to access the Google API.
//               var token = result.credential.accessToken;
//               // The signed-in user info.
//               var user = result.user;
//               // ...
//             }).catch(function(error) {
//               // Handle Errors here.
//               var errorCode = error.code;
//               var errorMessage = error.message;
//               // The email of the user's account used.
//               var email = error.email;
//               // The firebase.auth.AuthCredential type that was used.
//               var credential = error.credential;
//               // ...
//             });
//           console.log('Google Login')
//       }
//   }
//   return (
//     <View>
//       {/* <View style={styles.LoginContainer}>
//         <Text
//           style={styles.LoginText}
//           lightColor="rgba(0,0,0,0.8)"
//           darkColor="rgba(255,255,255,0.8)">
//           NAME
//         </Text>
//         <TextInput
//         onChangeText={(text)=>setName(text)}
//         placeholder={"Enter Name"}/>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//         <Text
//           style={styles.LoginText}
//           lightColor="rgba(0,0,0,0.8)"
//           darkColor="rgba(255,255,255,0.8)">
//           EMAIL ID
//         </Text>
//         <TextInput
//         onChangeText={(text)=>setEmail(text)}
//         placeholder={"Enter Email ID"}/>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//         <Text
//           style={styles.LoginText}
//           lightColor="rgba(0,0,0,0.8)"
//           darkColor="rgba(255,255,255,0.8)">
//           MOBILE
//         </Text>
//         <TextInput
//         onChangeText={(text)=>setPhone(text)}
//         placeholder={"Enter Mobile"}/>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//         <Text
//           style={styles.LoginText}
//           lightColor="rgba(0,0,0,0.8)"
//           darkColor="rgba(255,255,255,0.8)">
//           PASSWORD
//         </Text>
//         <TextInput
//         secureTextEntry={true}
//         onChangeText={(text)=>setPassword(text)}
//         placeholder={"Enter Password"}/>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       </View> */}
//       <Form>
//         <Item stackedLabel>
//           <Label>Email Address</Label>
//           <Input />
//         </Item>
//         <Item stackedLabel last>
//           <Label>Password</Label>
//           <Input />
//         </Item>
//         <Button block><Text>Login</Text></Button>
//         <View>
//           <Button onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
//             <Icon name='logo-google' />
//             <Text></Text>
//           </Button>
//           <Button onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
//             <Icon name='logo-facebook' />
//             <Text></Text>
//           </Button>
//           {/* <Button>
//             <Icon name='logo-google' />
//             <Text></Text>
//           </Button> */}
//         </View>      
//       </Form>
//     </View>
//   );
// }


// export default Login;
// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   // },
//   // separator: {
//   //   marginVertical: 10,
//   //   height: 1,
//   //   width: '100%',
//   // },
//   LoginContainer: {
//     // alignItems: 'flex-start',
//     // marginHorizontal: 50,
//     // width: 300
//   },
//   LoginText: {
//     fontSize: 12,
//     lineHeight: 20,
//     textAlign: 'center',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },

//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
  
//   helpContainer: {
//     marginTop: 15,
//     marginHorizontal: 20,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     textAlign: 'center',
//   },
//   container: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: "#fff"
//   },
//   inputContainer:{
//     flexDirection: "row"
//   },
//   separator:{
//     marginHorizontal: 15,
//     height: "50%",
//     width: 1,
//     backgroundColor: "#ccc"
//   },
// });
