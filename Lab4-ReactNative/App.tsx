import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './src/Store';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import Contact from './src/Contacts';
import ProfileContact from './src/ProfileContact';
import Favorite from './src/Favorite';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
        {/* <DrawerNavigator />  */}
      </NavigationContainer>
    </Provider>
  );
}

export default App;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contacts" component={BottomNavigator} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

const BottomNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="ContactsTab"
      barStyle={{backgroundColor: 'blue'}}
      labeled={false}
      activeColor="#FFFFFF"
      inactiveColor="#A8A8A8">
      <Tab.Screen
        name="ContactsTab"
        component={ContactScreens}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="star" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function ContactScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Contacts"
        component={Contact}
        options={{title: 'Contacts'}}
      />
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack.Navigator>
  );
}

function FavoriteScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Favorites"
        component={Favorite}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack.Navigator>
  );
}
