import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import RequestCard from '../components/RequestCard';

const Data = [{
      status: "urgent",
      bloodGroup: "A+",
      patientName: "Ronald Dixen",
      patientAge: 24,
      patientGender: "Male",
},
{
      status: "urgent",
      bloodGroup: "B+",
      patientName: "Dixen Ronald",
      patientAge: 42,
      patientGender: "Male",
},
]
export default function MainRequestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <FlatList
        data={Data}
        renderItem={({ item }) => {
          console.log("Item==> ",item)
          return <RequestCard item={item}/>
        }}
        keyExtractor={item => item.patientName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
