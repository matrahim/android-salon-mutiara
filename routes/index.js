/* eslint-disable react/no-unstable-nested-components */
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screen/Dashboard';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Logo from '../components/logo';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={Register}
        />
        <Stack.Screen
          name="Dashboard"
          options={{
            headerTitle: () => <Logo />,
            headerTitleAlign: 'center',
          }}
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
