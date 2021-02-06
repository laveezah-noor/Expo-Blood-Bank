import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import DonorScreen from '../screens/DonorScreen';
import RequestScreen from '../screens/RequestScreen';
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileInfo from '../components/EditProfileInfo'
import MainRequestScreen from '../screens/MainRequestScreen'
// import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeParamList, DonorParamList, RequestParamList } from '../types';
import {Button, Text} from 'native-base'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Donor"
        component={DonorNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Request"
        component={RequestNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MainRequest"
        component={MainRequestNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </HomeStack.Navigator>
  );
}

const DonorStack = createStackNavigator();

function DonorNavigator() {
  return (
    <DonorStack.Navigator>
      <DonorStack.Screen
        name="DonorScreen"
        component={DonorScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </DonorStack.Navigator>
  );
}

const RequestStack = createStackNavigator();

function RequestNavigator() {
  return (
    <RequestStack.Navigator>
      <RequestStack.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </RequestStack.Navigator>
  );
}

const MainRequestStack = createStackNavigator();

function MainRequestNavigator() {
  return (
    <MainRequestStack.Navigator>
      <MainRequestStack.Screen
        name="MainRequestScreen"
        component={MainRequestScreen}
        options={{ headerTitle: 'All Requests' }}
      />
    </MainRequestStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator mode="card">
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('EditProfile')}
              info
            ><Text>Edit</Text></Button>
          ),
          })} />
          <ProfileStack.Screen
           name="EditProfile" component={EditProfileInfo}/>
    </ProfileStack.Navigator>
  );
}

