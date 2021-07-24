import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './screens/Login'
import Signup from './screens/Signup'
import Home from './screens/Home';
import Details from './screens/Details';
import Update  from './screens/Update';
import Create from './screens/Create';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown: false
        }}>
        
       <Stack.Screen 
         name="Login"
         component={Login}
        
         />
         
         <Stack.Screen 
         name="Signup"
         component={Signup}
        
         />
       <Stack.Screen 
         name="Home"
         component={Home}
        
         />
        
          <Stack.Screen 
         name="Update"
         component={Update}
        
         />
          
          <Stack.Screen 
         name="Details"
         component={Details}
        
         />
          <Stack.Screen 
         name="Create"
         component={Create}
        
         />
         
        </Stack.Navigator>
     </NavigationContainer>
    );
  }


















