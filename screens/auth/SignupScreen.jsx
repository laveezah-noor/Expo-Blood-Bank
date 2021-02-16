import React from 'react';
import { StyleSheet, Switch, TouchableOpacity, View, Text, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';
import {Card, Item, Label, Picker, Icon} from 'native-base';
import {connect} from 'react-redux';
import {addProfile} from '../../redux/action';

class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phNumber: "",
            bGroup: "",
            email: "",
            password: "",
            donor: false,
            passwordConfirm: "",
            bGroups: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
        };
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate("Root")
                this.props.addProfile(this.state.name, this.state.phNumber, this.state.email, this.state.password, this.state.bGroup, this.state.donor)
            })
            .catch((error) => { Alert.alert(error.message); });
    }

    onBackToLoginPress = () => {
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <>
            <View style={styles.back} />
            <Text style={{fontSize: 20, position: 'absolute', marginTop: 100, marginHorizontal: 100}}>Create New Account</Text>
            <View style={styles.container}> 
            <Card style={styles.card}>
                <View>
                    <Text 
                        style={{ color: "gray",marginLeft: 100, marginTop: 4, position: 'absolute', fontSize: 10}}>Be a Donor</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "red" }}
                    thumbColor={this.state.donor ? "#fff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => this.setState({donor: !this.state.donor})}
                    value={this.state.donor}
                    />
                </View>
                <Item stackedLabel>
                    <Label>Name</Label>
                    <TextInput style={styles.input}
                        value={this.state.name}
                        onChangeText={(text) => { this.setState({name: text}) }}
                        keyboardType="name-phone-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </Item>
                <Item stackedLabel>
                    <Label>Phone Number</Label>
                    <TextInput style={styles.input}
                        value={this.state.phNumber}
                        onChangeText={(text) => { this.setState({phNumber: text}) }}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </Item>
                <Item picker>
                    <Label style={{fontSize: 15, paddingBottom: 10}}>Blood Group</Label>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined, marginLeft: 28 }}
                        placeholder="Select your Blood Group"
                        placeholderStyle={{ color: "#ddd",}}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.bGroup}
                        onValueChange={(value) => { this.setState({bGroup: value}) }}
                    >{this.state.bGroups.map((item)=>
                        {return(
                            <Picker.Item label={item} value={item} />
                        )})}
                    </Picker>
                </Item>
                <Item stackedLabel>
                    <Label>Email Address</Label>
                    <TextInput style={styles.input}
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
                <Item stackedLabel>
                    <Label> Confirm Password</Label>
                    <TextInput style={styles.input}
                        value={this.state.passwordConfirm}
                        onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </Item>
                <View style={{paddingVertical:5}}>
                    <TouchableOpacity styles={styles.loginBtn} onPress={this.onSignupPress} >
                        <Text style={styles.btnText}>Create New Account</Text>
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
  
const mapDispatchToProps = (dispatch) => ({
    addProfile: (name, phone, email, password, bGroup, donor) => dispatch(addProfile(name, phone, email, password, bGroup, donor))
})
  
  export default connect(
    null, mapDispatchToProps
    )(SignupScreen);

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
        marginTop: 180,
        paddingHorizontal: 10
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