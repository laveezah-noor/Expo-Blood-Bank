import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/BottomTabNavigator'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LoadingScreen from './screens/LoadingScreen'

import {Provider} from 'react-redux';
import store from './redux';
import * as firebase from 'firebase';
import Api from './firebase/firebase'

export default function App (props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [isAuthenticationReady, setIsAuthenticationReady] = React.useState(false);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const colorScheme = useColorScheme();
    
    // Initialize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(Api.firebaseConfig)
    }
    firebase.auth().onAuthStateChanged((user)=>onAuthStateChanged(user));
  
  
  const onAuthStateChanged = (user) => {
    console.log(user)
    setIsAuthenticationReady(true);
    setIsAuthenticated(!!user);
    console.log(isLoadingComplete, isAuthenticated, isAuthenticationReady)
  }
  // && !skipLoadingScreen
  if ((!isLoadingComplete || !isAuthenticationReady)) {
    // return <LoadingScreen isAuthenticationReady={isAuthenticationReady}/>;
    return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} isAuthenticated={isAuthenticated} />
        <StatusBar style="auto"/>
      </SafeAreaProvider>
    </Provider>)
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} isAuthenticated={isAuthenticated} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
