import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from '../components/Themed';

class LoadingScreen extends Component {
    componentDidMount(){
        this.checkIfLoggedIn();
    }
    checkIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(
            function(user) {
                if(user) {
                    this.props.navigation.navigate('Home')
                }
                else{
                    this.props.navigation.navigate('Login')
                }
            }.bind(this)
        )
    }
    render() {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

export default LoadingScreen;