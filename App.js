import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import GetScreen from './components/GetScreen';
import PostScreen from './components/PostScreen';
import PutScreen from './components/PutScreen';
import DeleteScreen from './components/DeleteScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="GET" component={GetScreen} />
        <Tab.Screen name="POST" component={PostScreen} />
        <Tab.Screen name="PUT" component={PutScreen} />
        <Tab.Screen name="DELETE" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
