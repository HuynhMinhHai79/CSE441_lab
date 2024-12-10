/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Customer from './components/Customer';
import AddCustomer from './components/AddCustomer';
import Transaction from './components/Transaction';
import Home from './components/Home/Home';
import Settings from './components/Settings';
import DetailTransaction from './components/DetailTransaction';
import AddServiceScreen from './components/Home/AddService';
import UpdateServiceScreen from './components/Home/UpdateService';
import DetailServiceScreen from './components/Home/DetailService';
import {MenuProvider} from 'react-native-popup-menu';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TransactionStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransactionList" component={Transaction} />
      <Stack.Screen name="DetailTransaction" component={DetailTransaction} />
    </Stack.Navigator>
  );
};

const CustomerStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CustomerList" component={Customer} />
      <Stack.Screen name="AddCustomer" component={AddCustomer} />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <MenuProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={AddServiceScreen} />
        <Stack.Screen name="Update" component={UpdateServiceScreen} />
        <Stack.Screen name="Detail" component={DetailServiceScreen} />
      </Stack.Navigator>
    </MenuProvider>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Transaction':
              iconName = 'receipt';
              break;
            case 'Customer':
              iconName = 'people';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'home';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F06B7A',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Transaction" component={TransactionStack} />
      <Tab.Screen name="Customer" component={CustomerStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
