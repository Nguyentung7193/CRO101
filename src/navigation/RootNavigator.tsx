import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';
import { RootStackParamList } from '../types/navigation';
import lap3b1 from '../views/lap/lap3/lap3';
import lap2 from '../views/lap/lap2/lap2';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Lap2">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Lap3b1" component={lap3b1} />
      <Stack.Screen name="Lap2" component={lap2}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
