import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';
import {RootStackParamList} from '../types/navigation';
import lap3b1 from '../views/lap/lap3/lap3';
import lap2 from '../views/lap/lap2/lap2';
import lap4 from '../views/lap/lap4/lap4';
import lap4b2 from '../views/lap/lap4/lap4b2';
import lap1 from '../views/lap/lap1/lap1';
import lap4b3 from '../views/lap/lap4/lap4b3';
import ScreenHome from '../views/demo/demo8/ScreenHome';
import Lap8 from '../views/lap/lap8/Lap8';
import lap5b1 from '../views/lap/lap5/lap5b1';
import lap5b2 from '../views/lap/lap5/lap5b2';
import lap5b3 from '../views/lap/lap5/lap5b3';
import Lap6b1Screen1 from '../views/lap/lap6/lap6b1/lap6b1Screen1';
import Lap6b1Screen2 from '../views/lap/lap6/lap6b1/lap6b1Screen2';
import Lap7b1 from '../views/lap/lap7/lap7b1';
import ShoeListScreen from '../screens/ShoeListScreen';
import AddShoeScreen from '../screens/AddShoeScreen';
import ShoeDetailScreen from '../screens/ShoeDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ShoeList"
      // initialRouteName="Lap7b1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Lap3b1" component={lap3b1} />
      <Stack.Screen name="Lap2" component={lap2} />
      <Stack.Screen name="Lap4" component={lap4} />
      <Stack.Screen name="Lap4b2" component={lap4b2} />
      <Stack.Screen name="Lap1" component={lap1} />
      <Stack.Screen name="Lap4b3" component={lap4b3} />
      <Stack.Screen name="ScreenHome" component={ScreenHome} />
      <Stack.Screen name="Lap8" component={Lap8} />
      <Stack.Screen name="lap5b1" component={lap5b1} />
      <Stack.Screen name="lap5b2" component={lap5b2} />
      <Stack.Screen name="lap5b3" component={lap5b3} />
      <Stack.Screen name="Lap6b1Screen1" component={Lap6b1Screen1} />
      <Stack.Screen name="Lap6b1Screen2" component={Lap6b1Screen2} />
      <Stack.Screen name="Lap7b1" component={Lap7b1} />
      <Stack.Screen
        name="ShoeList"
        component={ShoeListScreen}
        options={{title: 'Shoes'}}
      />
      <Stack.Screen
        name="AddShoe"
        component={AddShoeScreen}
        options={{title: 'Add New Shoe'}}
      />
      <Stack.Screen
        name="ShoeDetail"
        component={ShoeDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
