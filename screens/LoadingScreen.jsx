import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { View } from '../components/Themed';

class LoadingScreen extends Component {
    componentDidMount(){
        this.checkIfLoggedIn();
    }
    checkIfLoggedIn = () =>{
        // firebase.auth().onAuthStateChanged(
        //     function(user) {
        //         if(user) {
        //             this.props.navigation.navigate()
        //         }
        //     }
        // )
    }
    render() {
        return (
            <View>
                <ActivityIndicator/>
            </View>
        );
    }
}

export default LoadingScreen;