
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';
import {Card, Item, Label} from 'native-base';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
        };
    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent.");
                this.props.navigation.navigate("Login")
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate("Login");
    }

    render() {
        return (
            <>
            <View style={styles.back} />
            <Text style={{fontSize: 20, position: 'absolute', marginTop: 180, marginHorizontal: 100}}>Forgot Password</Text>
            <View style={styles.container}> 
            <Card style={styles.card}>
                <Item stackedLabel>
                    <Label>Email Address</Label>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={(text) => { this.setState({email: text}) }}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </Item>
                <View style={{paddingVertical:5}}>
                    <TouchableOpacity styles={styles.loginBtn} onPress={this.onResetPasswordPress} >
                        <Text style={styles.btnText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                
            </Card>
                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={this.onBackToLoginPress} >
                        <Text style={styles.btnText}>Back to Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: "red", 
        marginTop: 300, 
        width: 400, 
        height: 500, 
        position: 'absolute'
    },
    container: {
        alignItems: "center",
        marginVertical: 250
    },
    card:{
        padding: 25,
        paddingHorizontal: 35,
    },
    input:{
        width: 200,
        height: 40, 
        borderWidth: 0,
        
    },
    btnText:{
        fontSize: 13,
        padding: 5,
        width: "95%",
        borderRadius: 5,
        textAlign: "center",
        margin: 5,
        color: "white",
        backgroundColor: "red"
    },
});