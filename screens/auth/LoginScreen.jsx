import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';
import {Card, Item, Label} from 'native-base';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {this.props.navigation.navigate("Root")})
        .catch((error) => { Alert.alert(error.message); });
    }

    onCreateAccountPress = () => {
        this.props.navigation.navigate("Signup")
    }

    onForgotPasswordPress = () => {
        this.props.navigation.navigate("ForgotPassword")
    }

    render() {
        return (
            <>
            <View style={styles.back} />
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
                <Item stackedLabel>
                    <Label>Password</Label>
                    <TextInput style={styles.input}
                        value={this.state.password}
                        onChangeText={(text) => { this.setState({password: text}) }}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </Item>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 5}}>
                    <TouchableOpacity styles={styles.loginBtn} onPress={this.onLoginPress} >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity styles={styles.forgotBtn}  onPress={this.onForgotPasswordPress} >
                        <Text style={styles.btnText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                
            </Card>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.txt}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.onCreateAccountPress} >
                        <Text style={[styles.btnText,{fontSize: 12}]}>Create a new account</Text>
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
    txt: {
        marginTop: 9,
        fontSize: 14,
        color: "white",
    }
});