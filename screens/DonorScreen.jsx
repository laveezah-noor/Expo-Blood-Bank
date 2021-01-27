import React, { Component } from 'react';
import {Text, View} from 'react-native'

import { StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, CheckBox, Form, Item, Label, Input, Textarea, Button } from 'native-base';

export default function DonorScreen() {
    return (
    <ScrollView>
          <Card style={styles.container}>
            <CardItem>
              <CheckBox checked={true}/>
              <Text style={{paddingHorizontal: 25}}>Set as Default</Text>
            </CardItem>
            <CardItem>
              <Form>
                <Item stackedLabel>
                  <Label>Donor Name</Label>
                  <Input />
                </Item>
                <Item stackedLabel>
                  <Label>Blood Group</Label>
                  <View style={styles.btnGroup}>
                  <Button style={styles.btn}><Text style={styles.btnText}>A+</Text></Button>
                  <Button style={styles.btn}><Text style={styles.btnText}>A-</Text></Button>
                  <Button style={styles.btn}><Text style={styles.btnText}>B+</Text></Button>
                  <Button style={styles.btn}><Text style={styles.btnText}>B-</Text></Button>
                </View>
                <View style={styles.btnGroup}>
                  <Button style={styles.btn}><Text style={styles.btnText}>AB+</Text></Button>
                  <Button style={styles.btn}><Text style={styles.btnText}>AB-</Text></Button>
                  <Button style={styles.btn}><Text style={styles.btnText}>O+</Text></Button>
                  <Button style={styles.btn}><Text style={styles.btnText}>O-</Text></Button>
                </View>
                </Item>
                <Item stackedLabel style={{flexDirection: "row"}}>
                  <Label>Gender</Label>
                   <Button style={styles.btn}><Text style={{fontSize: 12}}>Male</Text></Button>
                  <Button style={styles.btn}><Text style={{fontSize: 12}}>Female</Text></Button>
                </Item>
                <Item stackedLabel last>
                  <Label>Donor's Weight</Label>
                  <Button style={styles.btn}><Text style={{fontSize: 12}}>Greater than 50</Text></Button>
                  <Button style={styles.btn}><Text style={{fontSize: 12}}>Less than 50</Text></Button>
                </Item>
                <Item stackedLabel>
                  <Label>Address</Label>
                   <Textarea  />
                </Item>
                <Item stackedLabel>
                  <Label>Email Address</Label>
                  <Input />
                </Item>
                <Item stackedLabel>
                  <Label>Number</Label>
                  <Input />
                </Item>
                <View>
                <CheckBox />
                <Text>I agree to show my contact details in public</Text>
                </View>
                <Button block><Text>Be a Donor</Text></Button>
              </Form>
            </CardItem>
         </Card>
         </ScrollView>
    );
}


const styles = StyleSheet.create({
  container:{
    borderRadius: 10,
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
  },
  btnText:{
    color: "white",
    fontSize: 12,
  },
});
