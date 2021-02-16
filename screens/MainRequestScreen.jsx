import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import RequestCard from '../components/RequestCard';
import {connect} from 'react-redux';
import {fetchRequests} from '../redux/action'

function MainRequestScreen({Requests}) {
  React.useEffect(()=>{
    fetchRequests() 
  }) 
  console.log("Requests==>",Requests)
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Here Are All Request.
        Help the ones in Need
      </Text>
      <FlatList
        data={Requests}
        renderItem={({ item }) => {
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

const mapStateToProps = (state) => {
  return{
  Requests: state.app.Requests,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchRequests: () => dispatch(fetchRequests())
})

export default connect(
  mapStateToProps, mapDispatchToProps
  )(MainRequestScreen);