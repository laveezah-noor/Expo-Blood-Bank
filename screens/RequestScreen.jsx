import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { Form, Item, Label, Button, List, ListItem, InputGroup, Input, Icon } from 'native-base';
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {sendRequest} from '../redux/action'

class RequestScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        bGroup: "",
        location: "",
        date: "",
        time: "",
        noon: "",
        bloodUnit: "",
        patienName: "",
        relation: "",
        gender: "",
    };
  }
  timeChange = (txt) => {
    this.setState({time: (txt + ' ' + this.state.noon)})
  }
  onSendRequest = () => {
    const data = {
      bGroup: this.state.bGroup,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time,
      bloodUnit: this.state.bloodUnit,
      patienName: this.state.patienName,
      relation: this.state.relation,
      gender: this.state.gender,
    }
    return this.props.sendRequest(data)
    
  }
  render() {
        return (
            <ScrollView>
              <Text style={styles.head}>Request For Blood</Text>
              <Text style={styles.subHead}>Request for Blood wherever whenever you want</Text>
              <Form>
              <View>
                <Label style={{fontSize:15, color: "gray", marginTop: 20, marginLeft: 12}}>Choose Blood Group</Label>
                <View style={styles.btnGroup}>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "A+"})}><Text style={styles.btnText}>A+</Text></Button>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "A-"})}><Text style={styles.btnText}>A-</Text></Button>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "B+"})}><Text style={styles.btnText}>B+</Text></Button>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "B+"})}><Text style={styles.btnText}>B-</Text></Button>
                </View>
                <View style={styles.btnGroup}>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "AB+"})}><Text style={styles.btnText}>AB+</Text></Button>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "AB-"})}><Text style={styles.btnText}>AB-</Text></Button>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "O+"})}><Text style={styles.btnText}>O+</Text></Button>
                  <Button style={styles.btn} onPress={()=>this.setState({bGroup: "O-"})}><Text style={styles.btnText}>O-</Text></Button>
                </View>
                </View>
                
                  <Item stackedLabel>
                    <Label>Location</Label>
                    <Input
                      style={styles.inputText}
                      onChangeText={(txt)=>this.setState({location: txt})}
                      placeholder="Enter Your Location" />
                  </Item>
                  <Item stackedLabel>
                    <Label>Date</Label>
                    <Input
                      style={styles.inputText}
                      onChangeText={(txt)=>this.setState({date: txt})}
                      placeholder="Choose Date"/>
                  </Item>
                  <Item stackedLabel>
                    <Label>Time</Label>
                    <Item>
                      <Input
                      style={styles.inputText}
                      onChangeText={(txt)=>this.timeChange(txt)}
                      placeholder="Enter Time"/>
                      <Button style={styles.btn} onPress={()=>this.setState({noon: 'AM'})}><Text style={styles.btnText}>AM</Text></Button>
                      <Button style={styles.btn} onPress={()=>this.setState({noon: 'PM'})}><Text style={styles.btnText}>PM</Text></Button>
                    </Item>
                  </Item>
                  <Item stackedLabel>
                    <Label>Blood Unit</Label>
                    <Input
                      style={styles.inputText}
                      onChangeText={(txt)=>this.setState({bloodUnit: txt})}
                      placeholder="Enter Blood Unit"/>
                  </Item>
                  <Item stackedLabel>
                    <Label>Patient Name</Label>
                    <Item>
                      <Input
                      style={styles.inputText}
                      onChangeText={(txt)=>this.setState({patienName: txt})}
                      placeholder="Enter Patient Name"/>
                      <Button style={styles.btn} onPress={()=>this.setState({gender: "Male"})}><Text style={styles.btnText}>Male</Text></Button>
                      <Button style={styles.btn} onPress={()=>this.setState({gender: "Female"})}><Text style={styles.btnText}>Female</Text></Button>
                    </Item>
                  </Item>
                  <Item stackedLabel>
                    <Label>Relation</Label>
                    <Item>
                      <Button style={styles.btn} onPress={()=>this.setState({relation: "Personal"})}><Text style={styles.btnText}>Personal</Text></Button>
                      <Button style={styles.btn} onPress={()=>this.setState({relation: "Family"})}><Text style={styles.btnText}>Family</Text></Button>
                      <Button style={styles.btn} onPress={()=>this.setState({relation: "Friend"})}><Text style={styles.btnText}>Friend</Text></Button>
                      <Button style={styles.btn} onPress={()=>this.setState({relation: "Other"})}><Text style={styles.btnText}>Other</Text></Button>
                    </Item>
                  </Item>
                </Form>
                <Button block style={styles.btn} onPress={()=>this.onSendRequest()}><Text style={styles.btnText}>Request For Blood</Text></Button>
              </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  head:{
    fontSize: 20,
    fontWeight: "500",
  },
  subHead:{
    fontSize: 12,
    color: "gray"
  },
  btnGroup:{
    flexDirection: "row",
    margin: 4,
    justifyContent: "space-evenly"
  },
  btn:{
    marginVertical: 8,
    marginHorizontal: 2,
    flexBasis: 50,
    justifyContent: "center",
    backgroundColor: "#de2c2c",
    // borderRadius: 25,
    // borderColor: "#ccc",
  },
  btnText:{
    color: "white"
  },
  inputText:{
    fontSize: 14,
    marginHorizontal:5
  }
});

const mapStateToProps = (state) => ({
  ads: state.app.ads,
  current_user: state.auth.current_user,
  name: "GHOUS AHMED"
})

const mapDispatchToProps = (dispatch) => ({
  sendRequest: (data) => dispatch(sendRequest(data)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
  )(RequestScreen);