import { Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Login } from '../components/Login';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <View style={styles.subContainer}>
                    <Login path="" />
                </View>             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      justifyContent: "center",
      alignItems: "center",
    
    },
    subContainer:{
        justifyContent: "center",
        backgroundColor: "red",
        flex: 1
    }
});
  
export default RegisterScreen;