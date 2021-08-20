import FlowerScreen from '@navigation/screens/FlowerScreen';
import HomeScreen from '@navigation/screens/HomeScreen';
import LogoutScreen from '@navigation/screens/LogoutScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import res from '@res';
import React from 'react';
import {Image} from 'react-native';
import {defaultStackScreenOptions} from './AppNavigator';

export type MainTabNavigatorParamList = {
  Home: undefined;
  Messages: undefined;
  Profile: undefined;
  Map: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Flower: {id: number | undefined};
};

interface TabBarIcon {
  color: string;
  size: number;
}

function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultStackScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Flower" component={FlowerScreen} />
    </Stack.Navigator>
  );
}

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator<MainTabNavigatorParamList>();

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 8,
        },
        inactiveTintColor: '#bbb',
        activeTintColor: res.colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}: TabBarIcon) => (
            <Image
              resizeMode="contain"
              source={res.images.homeTab}
              style={{height: size, tintColor: color}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={LogoutScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}: TabBarIcon) => (
            <Image
              resizeMode="contain"
              source={res.images.messagesTab}
              style={{height: size, tintColor: color}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={LogoutScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}: TabBarIcon) => (
            <Image
              resizeMode="contain"
              source={res.images.profileTab}
              style={{height: size, tintColor: color}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={LogoutScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}: TabBarIcon) => (
            <Image
              resizeMode="contain"
              source={res.images.mapTab}
              style={{height: size, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
