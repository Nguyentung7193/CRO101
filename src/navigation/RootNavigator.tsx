import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';
import { RootStackParamList } from '../types/navigation';
import lap3b1 from '../views/lap/lap3/lap3';
import lap2 from '../views/lap/lap2/lap2';
import lap4 from '../views/lap/lap4/lap4';
import lap4b2 from '../views/lap/lap4/lap4b2';
import lap1 from '../views/lap/lap1/lap1';
import lap4b3 from '../views/lap/lap4/lap4b3';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Lap1">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Lap3b1" component={lap3b1} />
      <Stack.Screen name="Lap2" component={lap2}/>
      <Stack.Screen name="Lap4" component={lap4}/>
      <Stack.Screen name="Lap4b2" component={lap4b2}/>
      <Stack.Screen name="Lap1" component={lap1} />
      <Stack.Screen name="Lap4b3" component={lap4b3} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
