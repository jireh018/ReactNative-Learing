import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const  MainStackScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainStackScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'turquoise',
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Overview',
      headerLeft: () => (
        <Icon.Button  
          name="ios-menu" size={25}
          backgroundColor="#009387" onPress={() =>
            navigation.openDrawer()
          }
        ></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#1f65ff',
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button  
            name="ios-menu" size={25}
            backgroundColor="#1f65ff" onPress={() =>
              navigation.openDrawer()
            }
          ></Icon.Button>
        )
      }}
     />
  </DetailsStack.Navigator>
);
