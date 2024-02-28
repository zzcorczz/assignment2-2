/*
File name:
  App.js
Purpose:
  The entry point of the application.
  Note: We are combining two tab screens together as a component, and then
  pass it to the main function.
*/


import { StatusBar } from 'expo-status-bar';
import { createContext, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './Screens/Start';
import { Styles } from './Components/Styles';
import AllActivities from './Screens/allActivities';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpecialActivities from './Screens/SpecialActivities';
import ContextProvider from './Components/ActivitiesList';
import AddAnActivity from './Screens/AddAnActivity';
import { FontAwesome } from '@expo/vector-icons';
import Edit from './Screens/Edit';
import PressableComponent from './Components/PressableComponent';





const stack = createNativeStackNavigator();

const stack2 = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabScreen () {
  return (
    <Tab.Navigator
      screenOptions = {
        Styles.bottomTab        
      }
    >
      <Tab.Screen
        name='All Activities'
        component={AllActivities}
        options={{
          tabBarLabel: ({focused, color, number})=>{
            { return focused ? (
              <Text style={{color:'orange', fontSize:8}}> All Activities </Text>
             ) : (
              <Text style={{color:'grey', fontSize:8}}> All Activities </Text>
            )
          }},
          tabBarIcon: ({focused, color, number})=>{
            { return focused ? (
              <FontAwesome
               name="dollar" 
               size={24}
               color={'orange'} 
              />)
             : (
              <FontAwesome name="dollar" size={24} color={'grey'}/>
            )
          }
          }
        }
        }
      />
      <Tab.Screen
        name='Special Activities'
        component={SpecialActivities}
        options={{
          tabBarLabel: ({focused, color, number})=>{
            { return focused ? (
              <Text style={{color:'orange', fontSize:8}}> Special Activities </Text>
             ) : (
              <Text style={{color:'grey', fontSize:8}}> Special Activities </Text>
            )
          }},
          tabBarIcon: ({focused, color, number})=>{
            { return focused ? (
              <FontAwesome
               name="exclamation" 
               size={24}
               color={'orange'} 
              />)
             : (
              <FontAwesome name="exclamation" size={24} color={'grey'}/>
            )
          }
          }
        }
        }
      />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
        <stack.Navigator>
          <stack.Screen 
            options={Styles.screenStyles}
            name='start'
            component={Start}
          />
          <stack.Screen 
            options={Styles.activities}
            name='Tab'
            component={TabScreen}
          />
          <stack.Screen
            options={Styles.addScreen}
            name='Add'
            component={AddAnActivity}
          />
          <stack.Screen
            options={Styles.editScreen}
            name='Edit'
            component={Edit}
          />
        </stack.Navigator>
    </NavigationContainer>
  );
};
