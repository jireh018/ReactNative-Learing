// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go To Details Screen"
        onPress={() => navigation.navigate("Details")}
       />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button 
        title="Go To Details Screen again"
        onPress={() => navigation.push("Details")}
       />
       <Button 
        title="Go To Home Screen"
        onPress={() => navigation.navigate("Home")}
       />
       <Button 
        title="Go back"
        onPress={() => navigation.goBack()}
       />
       <Button 
        title="Go To the first screen"
        onPress={() => navigation.popToTop()}
       />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

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
      backgroundColor:'turquoise',
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
            backgroundColor="#009387" onPress={() =>
              navigation.openDrawer()
            }
          ></Icon.Button>
        )
      }}
     />
  </DetailsStack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
