/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Lap6b1Screen1 from '../views/lap/lap6/lap6b1/lap6b1Screen1';
import CustomDrawer from '../components/CustomDrawer';
import lap5b1 from '../views/lap/lap5/lap5b1';
import lap5b2 from '../views/lap/lap5/lap5b2';
import lap5b3 from '../views/lap/lap5/lap5b3';
import Lap6b1Screen2 from '../views/lap/lap6/lap6b1/lap6b1Screen2';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 280,
        },
        drawerType: 'front',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f6f6f6',
        },
        headerTintColor: '#333',
      }}>
      <Drawer.Screen
        name="Lap5b1"
        component={lap5b1}
        options={{
          title: 'Lap5b1',
          drawerLabel: 'Lap5b1',
          drawerIcon: ({color, size}) => (
            <Icon name="eye-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="lap5b2"
        component={lap5b2}
        options={{
          title: 'Lap5b2',
          drawerLabel: 'Lap5b2',
          drawerIcon: ({color, size}) => (
            <Icon name="eye-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="lap5b3"
        component={lap5b3}
        options={{
          title: 'Lap5b3',
          drawerLabel: 'Lap5b3',
          drawerIcon: ({color, size}) => (
            <Icon name="eye-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lap6b1Screen1"
        component={Lap6b1Screen1}
        options={{
          title: 'Lap6b1Screen1',
          drawerLabel: 'Lap6b1Screen1',
          drawerIcon: ({color, size}) => (
            <Icon name="create-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lap6b1Screen2"
        component={Lap6b1Screen2}
        options={{
          title: 'Lap6b1Screen2',
          drawerLabel: 'Lap6b1Screen2',
          drawerIcon: ({color, size}) => (
            <Icon name="navigate-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
