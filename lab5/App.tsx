import React from 'react';
import LoginScreen from './components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/Home';
import AddServiceScreen from './components/AddService';
import DetailServiceScreen from './components/DetailService';
import {MenuProvider} from 'react-native-popup-menu';
import UpdateServiceScreen from './components/UpdateService';
const Stack = createStackNavigator();

function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Add"
            component={AddServiceScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Update"
            component={UpdateServiceScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailServiceScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}

export default App;
