import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase'
import { Spinner } from 'native-base';
import { useNavigation } from '@react-navigation/native';

function LoadingScreen(props,{ isAuthenticationReady}) {
    React.useEffect(() => {
        checkIfLoggedIn();
    }, [isAuthenticationReady])
    const navigation = useNavigation(); 
    const checkIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(
            function(user) {
                if(user) {
                    console.log("I'm Gooing")
                    navigation.navigate('Root')
                }
                else{
                    console.log("Yara working")
                    navigation.navigate('Login')
                }
            }
        )}
        console.log(props)
    return (
        <View style={{justifyContent: "center", marginTop: 300}}>
            <Spinner color="red"/>
        </View>
    );
}


export default LoadingScreen;